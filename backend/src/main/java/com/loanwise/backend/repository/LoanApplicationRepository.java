package com.loanwise.backend.repository;

import com.loanwise.backend.entity.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanApplicationRepository 
        extends JpaRepository<LoanApplication, Long> {

    // Get all loan applications of a specific user
    List<LoanApplication> findByUserId(Long userId);

    // Count loan applications by status
    long countByStatus(String status);

    // Get loan applications by status (Admin Panel)
    List<LoanApplication> findByStatus(String status);

}