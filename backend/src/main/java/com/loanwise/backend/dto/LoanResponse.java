package com.loanwise.backend.dto;

public class LoanResponse {

    private double monthlyEMI;
    private double totalInterest;
    private double totalAmount;

    public LoanResponse() {
    }

    public LoanResponse(double monthlyEMI, double totalInterest, double totalAmount) {
        this.monthlyEMI = monthlyEMI;
        this.totalInterest = totalInterest;
        this.totalAmount = totalAmount;
    }

    public double getMonthlyEMI() {
        return monthlyEMI;
    }

    public void setMonthlyEMI(double monthlyEMI) {
        this.monthlyEMI = monthlyEMI;
    }

    public double getTotalInterest() {
        return totalInterest;
    }

    public void setTotalInterest(double totalInterest) {
        this.totalInterest = totalInterest;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }
}