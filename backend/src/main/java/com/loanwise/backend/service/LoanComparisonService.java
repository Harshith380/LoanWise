package com.loanwise.backend.service;

import org.springframework.stereotype.Service;

import com.loanwise.backend.dto.LoanRequest;
import com.loanwise.backend.dto.LoanResponse;

@Service
public class LoanComparisonService {

    public LoanResponse compareLoan(LoanRequest request) {

        double principal = request.getLoanAmount();
        double monthlyRate = request.getInterestRate() / 12 / 100;
        int months = request.getTenure() * 12;

        double emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months))
                / (Math.pow(1 + monthlyRate, months) - 1);

        double totalAmount = emi * months;
        double totalInterest = totalAmount - principal;

        return new LoanResponse(emi, totalInterest, totalAmount);
    }
}