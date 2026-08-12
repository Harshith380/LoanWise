package com.loanwise.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "loan_applications")
public class LoanApplication {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long userId;


    private String loanType;


    private double loanAmount;


    private String status;


    private LocalDate appliedDate;



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


    public String getLoanType() {
        return loanType;
    }


    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }


    public double getLoanAmount() {
        return loanAmount;
    }


    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }


    public LocalDate getAppliedDate() {
        return appliedDate;
    }


    public void setAppliedDate(LocalDate appliedDate) {
        this.appliedDate = appliedDate;
    }

}