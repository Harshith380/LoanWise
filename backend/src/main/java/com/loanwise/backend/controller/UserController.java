package com.loanwise.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.loanwise.backend.dto.LoginRequest;
import com.loanwise.backend.dto.RegisterRequest;
import com.loanwise.backend.service.UserService;
import com.loanwise.backend.dto.LoginResponse;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    // ===========================
    // Register API
    // ===========================
    @PostMapping("/register")
    public String registerUser(@Validated @RequestBody RegisterRequest request) {

        return userService.registerUser(request);

    }

    // ===========================
    // Login API
    // ===========================
   @PostMapping("/login")
public LoginResponse loginUser(
        @RequestBody LoginRequest request
) {

    return userService.loginUser(request);

}
}