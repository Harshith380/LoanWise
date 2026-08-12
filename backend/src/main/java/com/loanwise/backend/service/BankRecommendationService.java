package com.loanwise.backend.service;

import com.loanwise.backend.entity.Bank;
import com.loanwise.backend.entity.FinancialProfile;
import com.loanwise.backend.repository.BankRepository;
import com.loanwise.backend.repository.FinancialProfileRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankRecommendationService {

    private final BankRepository bankRepository;
    private final FinancialProfileRepository financialProfileRepository;

    public BankRecommendationService(
            BankRepository bankRepository,
            FinancialProfileRepository financialProfileRepository) {

        this.bankRepository = bankRepository;
        this.financialProfileRepository = financialProfileRepository;
    }

    public List<Bank> recommendBanks(
            String loanType,
            double loanAmount,
            Long userId) {

        // Get user's financial profile
        FinancialProfile profile =
                financialProfileRepository
                        .findByUserId(userId)
                        .orElse(null);

        return bankRepository
                .findByLoanTypeIgnoreCase(loanType)
                .stream()

                // Bank must support requested loan amount
                .filter(bank ->
                        bank.getMaxLoanAmount() >= loanAmount
                )

                // Rank banks
                .sorted(
    Comparator
        .comparingDouble((Bank bank) ->
            calculateScore(bank, loanAmount, profile)
        )
        .reversed()
)

                .collect(Collectors.toList());
    }


    private double calculateScore(
            Bank bank,
            double loanAmount,
            FinancialProfile profile) {

        double score = 0;


        // --------------------------------
        // 1. Interest Rate
        // --------------------------------

        /*
         * Lower interest rate = better score
         */

        score += (10 - bank.getInterestRate()) * 10;


        // --------------------------------
        // 2. Loan Amount Suitability
        // --------------------------------

        /*
         * Prefer banks whose maximum loan
         * amount is reasonably above the
         * requested amount.
         */

        if (bank.getMaxLoanAmount() >= loanAmount) {

            score += 20;

        }


        // --------------------------------
        // 3. Financial Profile
        // --------------------------------

        if (profile != null) {


            // Credit Score

            if (profile.getCreditScore() >= 750) {

                score += 30;

            } else if (profile.getCreditScore() >= 700) {

                score += 20;

            } else if (profile.getCreditScore() >= 650) {

                score += 10;

            }


            // Income

            if (profile.getMonthlyIncome() >= 100000) {

                score += 15;

            } else if (profile.getMonthlyIncome() >= 50000) {

                score += 10;

            } else if (profile.getMonthlyIncome() >= 30000) {

                score += 5;

            }


            // Existing Loan

            if (profile.getExistingLoan() == 0) {

                score += 10;

            } else if (profile.getExistingLoan()
                    < profile.getMonthlyIncome() * 5) {

                score += 5;

            }


            // Monthly Expenses

            if (profile.getMonthlyExpenses()
                    < profile.getMonthlyIncome() * 0.4) {

                score += 10;

            }


            // Employment Type

            if ("Salaried".equalsIgnoreCase(
                    profile.getEmploymentType())) {

                score += 5;

            }

        }


        return score;
    }
}