package com.loanwise.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.loanwise.backend.dto.EligibilityRequest;
import com.loanwise.backend.dto.EligibilityResponse;
import com.loanwise.backend.service.EligibilityService;

@RestController
@RequestMapping("/api/eligibility")
@CrossOrigin(origins = "http://localhost:5173")
public class EligibilityController {

    @Autowired
    private EligibilityService eligibilityService;

    @PostMapping("/check")
    public EligibilityResponse checkEligibility(
            @RequestBody EligibilityRequest request) {

        return eligibilityService.checkEligibility(request);

    }

}