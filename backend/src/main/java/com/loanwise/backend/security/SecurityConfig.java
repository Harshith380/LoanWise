package com.loanwise.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        System.out.println("SECURITY CONFIG LOADED");

        http
            .cors(Customizer.withDefaults())

            .csrf(csrf -> csrf.disable())

            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/users/register",
                    "/api/users/login",
                    "/api/admin/**",
                    "/api/emi/**",
                    "/api/loan/**",
                    "/api/eligibility/**",
                    "/api/history/**",
                    "/api/financial-profile/**",
                    "/api/recommendations/**",
                    "/api/applications/**"
                ).permitAll()

                // Allow browser CORS preflight requests
                .requestMatchers(
                    org.springframework.http.HttpMethod.OPTIONS,
                    "/**"
                )
                .permitAll()

                .anyRequest().authenticated()
            )

            .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(
            List.of(
                // Local development
                "http://localhost:5173",
                "http://localhost:5174",

                // Vercel URLs
                "https://loan-wise-two.vercel.app",
                "https://loan-wise-f1ebyqklq-harshith-16ef.vercel.app",
                "https://loan-wise-2rsbb2vxk-harshith-16ef.vercel.app",

                // Actual Vercel origin from browser error
                "https://loan-wise-nyow67wll-harshith-16ef.vercel.app"
            )
        );

        configuration.setAllowedMethods(
            List.of(
                "GET",
                "POST",
                "PUT",
                "DELETE",
                "OPTIONS"
            )
        );

        configuration.setAllowedHeaders(
            List.of("*")
        );

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration(
            "/**",
            configuration
        );

        return source;
    }
}