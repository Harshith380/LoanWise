package com.loanwise.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loanwise.backend.entity.LoanHistory;

public interface LoanHistoryRepository extends JpaRepository<LoanHistory, Long> {

    // Fetch loan history for a specific user
    List<LoanHistory> findByUserId(Long userId);

}