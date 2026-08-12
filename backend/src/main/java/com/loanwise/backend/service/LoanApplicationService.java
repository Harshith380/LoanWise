package com.loanwise.backend.service;


import com.loanwise.backend.entity.LoanApplication;
import com.loanwise.backend.repository.LoanApplicationRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;



@Service
public class LoanApplicationService {


    private final LoanApplicationRepository repository;



    public LoanApplicationService(LoanApplicationRepository repository) {

        this.repository = repository;

    }




    public LoanApplication applyLoan(LoanApplication application) {


        application.setStatus("PENDING");

        application.setAppliedDate(LocalDate.now());


        return repository.save(application);

    }





    public List<LoanApplication> getApplicationsByUser(Long userId) {


        return repository.findByUserId(userId);

    }
 public List<LoanApplication> getAllApplications() {

        return repository.findAll();

    }
    public LoanApplication updateStatus(Long id, String status) {

    LoanApplication application = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application not found"));

    application.setStatus(status);

    return repository.save(application);

}

}