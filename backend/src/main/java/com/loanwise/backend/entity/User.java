package com.loanwise.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false)
    private String fullName;


    @Column(nullable = false, unique = true)
    private String email;


    @Column(nullable = false)
    private String password;


    @Column(nullable = false)
    private Integer creditScore;


    @Column(nullable = false)
    private Double monthlySavings;


    @Column(nullable = false)
    private Integer approvalRate;


    @Column(nullable = false)
    private String role;

}