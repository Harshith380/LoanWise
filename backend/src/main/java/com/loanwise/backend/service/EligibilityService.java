package com.loanwise.backend.service;

import org.springframework.stereotype.Service;

import com.loanwise.backend.dto.EligibilityRequest;
import com.loanwise.backend.dto.EligibilityResponse;

@Service
public class EligibilityService {

    public EligibilityResponse checkEligibility(EligibilityRequest request) {

        double principal = request.getLoanAmount();
        double monthlyRate = request.getInterestRate() / 12 / 100;
        int months = request.getTenure() * 12;

        double monthlyEMI =
                (principal * monthlyRate * Math.pow(1 + monthlyRate, months))
                / (Math.pow(1 + monthlyRate, months) - 1);

        double totalEMI = monthlyEMI + request.getExistingEMI();

        double emiRatio =
        (totalEMI / request.getMonthlyIncome()) * 100;

boolean eligible = emiRatio <= 50;

String message;

if (eligible) {
    message = "Congratulations! You are eligible for this loan.";
} else {
    message = "Sorry! You are not eligible for this loan.";
}

return new EligibilityResponse(
        monthlyEMI,
        totalEMI,
        emiRatio,
        eligible,
        message
);
    }
}