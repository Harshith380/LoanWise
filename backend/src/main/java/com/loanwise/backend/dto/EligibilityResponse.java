package com.loanwise.backend.dto;

public class EligibilityResponse {

    private double monthlyEMI;
    private double totalEMI;
    private double emiRatio;
    private boolean eligible;
    private String message;

    public EligibilityResponse() {
    }

    public EligibilityResponse(
            double monthlyEMI,
            double totalEMI,
            double emiRatio,
            boolean eligible,
            String message
    ) {
        this.monthlyEMI = monthlyEMI;
        this.totalEMI = totalEMI;
        this.emiRatio = emiRatio;
        this.eligible = eligible;
        this.message = message;
    }

    public double getMonthlyEMI() {
        return monthlyEMI;
    }

    public void setMonthlyEMI(double monthlyEMI) {
        this.monthlyEMI = monthlyEMI;
    }

    public double getTotalEMI() {
        return totalEMI;
    }

    public void setTotalEMI(double totalEMI) {
        this.totalEMI = totalEMI;
    }

    public double getEmiRatio() {
        return emiRatio;
    }

    public void setEmiRatio(double emiRatio) {
        this.emiRatio = emiRatio;
    }

    public boolean isEligible() {
        return eligible;
    }

    public void setEligible(boolean eligible) {
        this.eligible = eligible;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}