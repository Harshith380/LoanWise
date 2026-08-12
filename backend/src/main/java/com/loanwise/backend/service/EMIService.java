package com.loanwise.backend.service;

import org.springframework.stereotype.Service;

import com.loanwise.backend.dto.EMIRequest;
import com.loanwise.backend.dto.EMIResponse;

@Service
public class EMIService {

    public EMIResponse calculateEMI(EMIRequest request) {

        double principal = request.getLoanAmount();

        double annualInterest = request.getInterestRate();

        int tenureYears = request.getTenure();

        // Monthly Interest Rate
        double monthlyRate = annualInterest / (12 * 100);

        // Total Months
        int months = tenureYears * 12;

        // EMI Formula
        double emi = (principal * monthlyRate *
                Math.pow(1 + monthlyRate, months))
                /
                (Math.pow(1 + monthlyRate, months) - 1);

        double totalAmount = emi * months;

        double totalInterest = totalAmount - principal;

        EMIResponse response = new EMIResponse();

        response.setMonthlyEMI(Math.round(emi * 100.0) / 100.0);

        response.setTotalInterest(Math.round(totalInterest * 100.0) / 100.0);

        response.setTotalAmount(Math.round(totalAmount * 100.0) / 100.0);

        return response;
    }
}