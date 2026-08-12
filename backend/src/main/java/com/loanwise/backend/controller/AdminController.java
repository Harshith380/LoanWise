package com.loanwise.backend.controller;

import com.loanwise.backend.dto.DashboardResponse;
import com.loanwise.backend.entity.LoanApplication;
import com.loanwise.backend.service.AdminService;
import com.loanwise.backend.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;


    // ==============================
    // Dashboard Statistics
    // ==============================
    @GetMapping("/dashboard")
    public DashboardResponse getDashboardStats() {

        return adminService.getDashboardStats();

    }


    // ==============================
    // Get All Loan Applications
    // ==============================
    @GetMapping("/applications")
    public List<LoanApplication> getAllApplications() {

        return adminService.getAllApplications();

    }


    // ==============================
    // Get Pending Applications
    // ==============================
    @GetMapping("/applications/pending")
    public List<LoanApplication> getPendingApplications() {

        return adminService.getPendingApplications();

    }


    // ==============================
    // Update Loan Status
    // APPROVED / REJECTED
    // ==============================
    @PutMapping("/applications/{id}/status")
    public LoanApplication updateLoanStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request
    ) {

        String status = request.get("status");

        return adminService.updateLoanStatus(id, status);

    }
    // ==============================
// Get All Users
// ==============================
@GetMapping("/users")
public List<User> getAllUsers() {

    return adminService.getAllUsers();

}

}