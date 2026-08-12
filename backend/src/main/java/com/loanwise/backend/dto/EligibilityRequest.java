package com.loanwise.backend.dto;

public class EligibilityRequest {

    private double monthlyIncome;
    private double existingEMI;
    private double loanAmount;
    private double interestRate;
    private int tenure;

    public EligibilityRequest() {
    }

    public double getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(double monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public double getExistingEMI() {
        return existingEMI;
    }

    public void setExistingEMI(double existingEMI) {
        this.existingEMI = existingEMI;
    }

    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }

    public int getTenure() {
        return tenure;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }
}