package com.loanwise.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.loanwise.backend.entity.LoanHistory;
import com.loanwise.backend.service.LoanHistoryService;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "https://loan-wise-6ckcnxq2i-harshith-16ef.vercel.app"})
public class LoanHistoryController {

    @Autowired
    private LoanHistoryService loanHistoryService;

    // Save Loan
    @PostMapping
    public LoanHistory saveLoan(@RequestBody LoanHistory loanHistory) {

        return loanHistoryService.saveLoan(loanHistory);

    }

    // Get User Loan History
    @GetMapping("/user/{userId}")
    public List<LoanHistory> getUserHistory(@PathVariable Long userId) {

        return loanHistoryService.getLoansByUser(userId);

    }

    // Delete Loan
    @DeleteMapping("/{id}")
    public void deleteLoan(@PathVariable Long id) {

        loanHistoryService.deleteLoan(id);

    }

}
