package com.loanwise.backend.service;

import com.loanwise.backend.entity.FinancialProfile;
import com.loanwise.backend.repository.FinancialProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FinancialProfileService {

    @Autowired
    private FinancialProfileRepository repository;

    public FinancialProfile saveProfile(FinancialProfile profile) {

        Optional<FinancialProfile> existing =
                repository.findByUserId(profile.getUserId());

        if (existing.isPresent()) {
            profile.setId(existing.get().getId());
        }

        return repository.save(profile);
    }

    public Optional<FinancialProfile> getProfile(Long userId) {
        return repository.findByUserId(userId);
    }
}