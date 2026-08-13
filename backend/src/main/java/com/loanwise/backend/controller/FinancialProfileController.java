package com.loanwise.backend.controller;

import com.loanwise.backend.entity.FinancialProfile;
import com.loanwise.backend.service.FinancialProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/financial-profile")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "https://loan-wise-6ckcnxq2i-harshith-16ef.vercel.app"})
public class FinancialProfileController {

    @Autowired
    private FinancialProfileService service;

    @PostMapping
    public ResponseEntity<?> saveProfile(
            @RequestBody FinancialProfile profile) {

        return ResponseEntity.ok(service.saveProfile(profile));
    }

   @GetMapping("/user/{userId}")
public ResponseEntity<?> getProfile(@PathVariable Long userId) {

    return service.getProfile(userId)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());

}
}
