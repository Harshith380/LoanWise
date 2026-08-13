package com.loanwise.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.loanwise.backend.dto.LoanRequest;
import com.loanwise.backend.dto.LoanResponse;
import com.loanwise.backend.service.LoanComparisonService;

@RestController
@RequestMapping("/api/loan")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "https://loan-wise-6ckcnxq2i-harshith-16ef.vercel.app"})
public class LoanComparisonController {

    @Autowired
    private LoanComparisonService loanComparisonService;

    @PostMapping("/compare")
    public LoanResponse compareLoan(@RequestBody LoanRequest request) {

        return loanComparisonService.compareLoan(request);

    }
}
