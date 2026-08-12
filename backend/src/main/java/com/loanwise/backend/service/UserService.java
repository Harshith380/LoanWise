package com.loanwise.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loanwise.backend.dto.LoginRequest;
import com.loanwise.backend.dto.RegisterRequest;
import com.loanwise.backend.entity.User;
import com.loanwise.backend.repository.UserRepository;
import com.loanwise.backend.dto.LoginResponse;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // ===========================
// Register User
// ===========================
public String registerUser(RegisterRequest request) {

    if (userRepository.existsByEmail(request.getEmail())) {
        return "Email already exists!";
    }

    User user = new User();

    user.setFullName(request.getFullName());
    user.setEmail(request.getEmail());
    user.setPassword(request.getPassword());

    // Default Financial Profile
    user.setCreditScore(700);
    user.setMonthlySavings(15000.0);
    user.setApprovalRate(85);

    // Default Role
    user.setRole("USER");

    userRepository.save(user);

    return "User Registered Successfully";
}

    // ===========================
    // Login User
    // ===========================
    public LoginResponse loginUser(LoginRequest request) {

    Optional<User> userOptional =
            userRepository.findByEmail(request.getEmail());

    if (userOptional.isEmpty()) {

      return new LoginResponse(
        null,
        null,
        null,
        null,
        "User not found!"
);
    }

    User user = userOptional.get();

    if (!user.getPassword().equals(request.getPassword())) {

        return new LoginResponse(
        null,
        null,
        null,
        null,
        "Invalid Password!"
);
    }

    return new LoginResponse(

        user.getId(),
        user.getFullName(),
        user.getEmail(),
        user.getRole(),
        "Login Successful"

);
}
}