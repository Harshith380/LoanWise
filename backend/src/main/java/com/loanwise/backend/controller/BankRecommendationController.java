package com.loanwise.backend.controller;

import com.loanwise.backend.entity.Bank;
import com.loanwise.backend.service.BankRecommendationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin(origins = "http://localhost:5173")
public class BankRecommendationController {

    private final BankRecommendationService recommendationService;

    public BankRecommendationController(
            BankRecommendationService recommendationService) {

        this.recommendationService = recommendationService;
    }

    @GetMapping("/banks")
    public List<Bank> recommendBanks(
            @RequestParam String loanType,
            @RequestParam double loanAmount,
            @RequestParam Long userId) {

        return recommendationService.recommendBanks(
                loanType,
                loanAmount,
                userId
        );
    }
}