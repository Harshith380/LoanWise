package com.loanwise.backend.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "financial_profiles")
public class FinancialProfile {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long userId;


    private double monthlyIncome;


    private String employmentType;


    private int creditScore;


    private double existingLoan;


    private double monthlyExpenses;


    private int age;


    private String loanPurpose;



    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public Long getUserId() {
        return userId;
    }


    public void setUserId(Long userId) {
        this.userId = userId;
    }


    public double getMonthlyIncome() {
        return monthlyIncome;
    }


    public void setMonthlyIncome(double monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }


    public String getEmploymentType() {
        return employmentType;
    }


    public void setEmploymentType(String employmentType) {
        this.employmentType = employmentType;
    }


    public int getCreditScore() {
        return creditScore;
    }


    public void setCreditScore(int creditScore) {
        this.creditScore = creditScore;
    }


    public double getExistingLoan() {
        return existingLoan;
    }


    public void setExistingLoan(double existingLoan) {
        this.existingLoan = existingLoan;
    }


    public double getMonthlyExpenses() {
        return monthlyExpenses;
    }


    public void setMonthlyExpenses(double monthlyExpenses) {
        this.monthlyExpenses = monthlyExpenses;
    }


    public int getAge() {
        return age;
    }


    public void setAge(int age) {
        this.age = age;
    }


    public String getLoanPurpose() {
        return loanPurpose;
    }


    public void setLoanPurpose(String loanPurpose) {
        this.loanPurpose = loanPurpose;
    }

}