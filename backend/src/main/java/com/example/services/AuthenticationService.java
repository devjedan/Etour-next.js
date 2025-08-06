package com.example.services;

import com.example.models.Authentication;

import java.util.List;
import java.util.Optional;

public interface AuthenticationService {
    Authentication createAuthentication(Authentication auth);
    List<Authentication> getAllAuthentications();
    Optional<Authentication> getAuthenticationById(int id);
    Optional<Authentication> getAuthenticationByUsername(String username);
    void deleteAuthentication(int id);
}
