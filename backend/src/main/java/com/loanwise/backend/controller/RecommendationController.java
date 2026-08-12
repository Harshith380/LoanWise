package com.loanwise.backend.controller;


import com.loanwise.backend.entity.LoanRecommendation;
import com.loanwise.backend.service.RecommendationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin(origins = "http://localhost:5173")
public class RecommendationController {


    @Autowired
    private RecommendationService service;



    @GetMapping("/{userId}")
    public List<LoanRecommendation> getRecommendations(
            @PathVariable Long userId
    ){

        return service.getRecommendations(userId);

    }

}