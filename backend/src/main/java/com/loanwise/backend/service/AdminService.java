package com.loanwise.backend.service;

import com.loanwise.backend.dto.DashboardResponse;
import com.loanwise.backend.entity.LoanApplication;
import com.loanwise.backend.repository.LoanApplicationRepository;
import com.loanwise.backend.repository.UserRepository;
import com.loanwise.backend.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoanApplicationRepository loanApplicationRepository;


    // ==============================
    // Admin Dashboard Statistics
    // ==============================
    public DashboardResponse getDashboardStats() {

        long totalUsers = userRepository.count();

        long totalApplications = loanApplicationRepository.count();

        long approvedApplications =
                loanApplicationRepository.countByStatus("APPROVED");

        long pendingApplications =
                loanApplicationRepository.countByStatus("PENDING");

        long rejectedApplications =
                loanApplicationRepository.countByStatus("REJECTED");


        return new DashboardResponse(
                totalUsers,
                totalApplications,
                approvedApplications,
                pendingApplications,
                rejectedApplications
        );
    }


    // ==============================
    // Get All Loan Applications
    // ==============================
    public List<LoanApplication> getAllApplications() {

        return loanApplicationRepository.findAll();

    }


    // ==============================
    // Get Pending Applications
    // ==============================
    public List<LoanApplication> getPendingApplications() {

        return loanApplicationRepository.findByStatus("PENDING");

    }


    // ==============================
    // Approve / Reject Loan
    // ==============================
    public LoanApplication updateLoanStatus(
            Long applicationId,
            String status
    ) {

        LoanApplication application =
                loanApplicationRepository.findById(applicationId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Loan application not found"
                        )
                );


        application.setStatus(status);


        return loanApplicationRepository.save(application);
    }
    // ==============================
// Get All Users
// ==============================
public List<User> getAllUsers() {

    return userRepository.findAll();

}

}