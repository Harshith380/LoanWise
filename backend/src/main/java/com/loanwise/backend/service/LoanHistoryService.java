package com.loanwise.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loanwise.backend.entity.LoanHistory;
import com.loanwise.backend.repository.LoanHistoryRepository;

@Service
public class LoanHistoryService {

    @Autowired
    private LoanHistoryRepository loanHistoryRepository;

    // Save Loan History
    public LoanHistory saveLoan(LoanHistory loanHistory) {

        return loanHistoryRepository.save(loanHistory);

    }

    // Get Loan History by User
    public List<LoanHistory> getLoansByUser(Long userId) {

        return loanHistoryRepository.findByUserId(userId);

    }

    // Delete Loan History
    public void deleteLoan(Long id) {

        loanHistoryRepository.deleteById(id);

    }

}