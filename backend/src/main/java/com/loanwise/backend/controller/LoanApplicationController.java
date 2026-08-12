package com.loanwise.backend.controller;


import com.loanwise.backend.entity.LoanApplication;
import com.loanwise.backend.service.LoanApplicationService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class LoanApplicationController {


    private final LoanApplicationService service;



    public LoanApplicationController(LoanApplicationService service) {

        this.service = service;

    }



    @PostMapping
    public ResponseEntity<LoanApplication> applyLoan(
            @RequestBody LoanApplication application
    ) {


        return ResponseEntity.ok(
                service.applyLoan(application)
        );

    }




    @GetMapping("/user/{userId}")
    public ResponseEntity<List<LoanApplication>> getApplications(
            @PathVariable Long userId
    ) {


        return ResponseEntity.ok(
                service.getApplicationsByUser(userId)
        );

    }
    @GetMapping
public ResponseEntity<List<LoanApplication>> getAllApplications() {

    return ResponseEntity.ok(
            service.getAllApplications()
    );

}
@PutMapping("/{id}/status")
public ResponseEntity<LoanApplication> updateStatus(

        @PathVariable Long id,

        @RequestParam String status

) {

    return ResponseEntity.ok(

            service.updateStatus(id, status)

    );

}
}