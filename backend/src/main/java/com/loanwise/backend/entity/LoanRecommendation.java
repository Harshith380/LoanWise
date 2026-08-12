package com.loanwise.backend.entity;

public class LoanRecommendation {

    private String loanType;

    private double maxAmount;

    private double interestRate;

    private int approvalChance;

    private int matchScore;

    private String reason;


    public LoanRecommendation() {
    }


    public LoanRecommendation(
            String loanType,
            double maxAmount,
            double interestRate,
            int approvalChance,
            int matchScore,
            String reason
    ) {

        this.loanType = loanType;
        this.maxAmount = maxAmount;
        this.interestRate = interestRate;
        this.approvalChance = approvalChance;
        this.matchScore = matchScore;
        this.reason = reason;

    }


    public String getLoanType() {
        return loanType;
    }


    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }


    public double getMaxAmount() {
        return maxAmount;
    }


    public void setMaxAmount(double maxAmount) {
        this.maxAmount = maxAmount;
    }


    public double getInterestRate() {
        return interestRate;
    }


    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }


    public int getApprovalChance() {
        return approvalChance;
    }


    public void setApprovalChance(int approvalChance) {
        this.approvalChance = approvalChance;
    }


    public int getMatchScore() {
        return matchScore;
    }


    public void setMatchScore(int matchScore) {
        this.matchScore = matchScore;
    }


    public String getReason() {
        return reason;
    }


    public void setReason(String reason) {
        this.reason = reason;
    }

}