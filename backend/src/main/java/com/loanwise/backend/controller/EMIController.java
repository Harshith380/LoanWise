package com.loanwise.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.loanwise.backend.dto.EMIRequest;
import com.loanwise.backend.dto.EMIResponse;
import com.loanwise.backend.service.EMIService;

@RestController
@RequestMapping("/api/emi")
@CrossOrigin(origins = "http://localhost:5173")
public class EMIController {

    @Autowired
    private EMIService emiService;

    @PostMapping("/calculate")
    public EMIResponse calculateEMI(@RequestBody EMIRequest request) {

        return emiService.calculateEMI(request);

    }
}