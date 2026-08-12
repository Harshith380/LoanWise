package com.loanwise.backend.service;

import com.loanwise.backend.entity.FinancialProfile;
import com.loanwise.backend.entity.LoanRecommendation;
import com.loanwise.backend.repository.FinancialProfileRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class RecommendationService {


    @Autowired
    private FinancialProfileRepository repository;



    public List<LoanRecommendation> getRecommendations(Long userId) {


        FinancialProfile profile =
                repository.findByUserId(userId)
                .orElse(null);



        List<LoanRecommendation> recommendations =
                new ArrayList<>();


        if(profile == null) {

            return recommendations;

        }


int approvalChance = calculateApproval(profile);

approvalChance += calculatePurposeScore(profile);

approvalChance = Math.min(approvalChance, 100);


        double income = profile.getMonthlyIncome();



        double loanMultiplier = calculateLoanMultiplier(profile);



        // Default recommendations

        recommendations.add(

            new LoanRecommendation(
    "Home Loan",
    income * loanMultiplier * 60,
    calculateInterestRate(profile, 8.5),
    approvalChance,
    calculateMatchScore(profile,"Home Loan"),
    generateReason(profile,"Home Loan")
)

        );



        recommendations.add(

   new LoanRecommendation(
    "Car Loan",
    income * loanMultiplier * 12,
    calculateInterestRate(profile, 9.2),
    Math.max(approvalChance - 5,0),
    calculateMatchScore(profile,"Car Loan"),
    generateReason(profile,"Car Loan")
)
        );



        recommendations.add(

          new LoanRecommendation(
    "Personal Loan",
    income * loanMultiplier * 8,
    calculateInterestRate(profile, 12.0),
    Math.max(approvalChance - 10,0),
    calculateMatchScore(profile,"Personal Loan"),
    generateReason(profile,"Personal Loan")
)
        );



        return recommendations;

    }





    private int calculateApproval(FinancialProfile profile) {


        int score = 50;



        // Credit Score

        if(profile.getCreditScore() >= 750) {

            score += 25;

        }

        else if(profile.getCreditScore() >= 650) {

            score += 15;

        }

        else {

            score -= 10;

        }



        // Income

        if(profile.getMonthlyIncome() >= 75000) {

            score += 15;

        }

        else if(profile.getMonthlyIncome() >= 50000) {

            score += 10;

        }



        // Debt-to-income calculation

        double dti =

            (profile.getExistingLoan()
            + profile.getMonthlyExpenses())
            /
            profile.getMonthlyIncome();



        if(dti < 0.4) {

            score += 10;

        }

        else if(dti > 0.7) {

            score -= 15;

        }



        // Employment

        if(profile.getEmploymentType()
                .equalsIgnoreCase("Salaried")) {

            score += 10;

        }



        // Age

        if(profile.getAge() >= 21 &&
           profile.getAge() <= 55) {

            score += 5;

        }



        return Math.min(Math.max(score, 0), 100);

    }





    private double calculateLoanMultiplier(
            FinancialProfile profile) {


        double multiplier = 1;


        if(profile.getCreditScore() >= 750) {

            multiplier += 0.5;

        }


        double dti =

            (profile.getExistingLoan()
            + profile.getMonthlyExpenses())
            /
            profile.getMonthlyIncome();



        if(dti > 0.6) {

            multiplier -= 0.3;

        }


        return Math.max(multiplier,0.5);

    }





    private double calculateInterestRate(
            FinancialProfile profile,
            double baseRate) {


        if(profile.getCreditScore() >= 750) {

            return baseRate - 0.5;

        }

        else if(profile.getCreditScore() < 650) {

            return baseRate + 1.5;

        }


        return baseRate;

    }
   private int calculatePurposeScore(FinancialProfile profile) {

    if(profile.getLoanPurpose() == null) {
        return 0;
    }


    String purpose =
            profile.getLoanPurpose().toLowerCase();


    int score = 0;


    if(purpose.contains("home")) {

        score += 5;

    }

    else if(purpose.contains("car")) {

        score += 5;

    }

    else if(purpose.contains("personal")) {

        score += 5;

    }


    return score;

}



private int calculateMatchScore(
        FinancialProfile profile,
        String loanType
) {

    int score = 50;


    // Credit score impact
    if(profile.getCreditScore() >= 750) {

        score += 15;

    }
    else if(profile.getCreditScore() >= 650) {

        score += 10;

    }



    // Income impact

    if(profile.getMonthlyIncome() >= 75000) {

        score += 15;

    }
    else if(profile.getMonthlyIncome() >= 50000) {

        score += 10;

    }



    // Loan purpose matching

    if(profile.getLoanPurpose() != null) {


        String purpose =
                profile.getLoanPurpose()
                .toLowerCase();



        if(
          loanType.toLowerCase()
          .contains("home")
          &&
          purpose.contains("home")
        ){

            score += 10;

        }


        else if(
          loanType.toLowerCase()
          .contains("car")
          &&
          purpose.contains("car")
        ){

            score += 10;

        }


        else if(
          loanType.toLowerCase()
          .contains("personal")
          &&
          purpose.contains("personal")
        ){

            score += 10;

        }

    }



    return Math.min(score,100);

}

private String generateReason(
        FinancialProfile profile,
        String loanType
){


    if(profile.getLoanPurpose()!=null
       &&
       profile.getLoanPurpose()
       .toLowerCase()
       .contains(loanType.toLowerCase().split(" ")[0])
    ){

        return "Your loan purpose matches "
                + loanType
                + " requirements";

    }



    if(profile.getCreditScore() >= 750){

        return "Excellent credit score improves approval chances";

    }



    if(profile.getMonthlyIncome() >= 50000){

        return "Stable income improves eligibility";

    }



    return "Based on your financial profile";


}

}