package com.example.services;

import com.example.models.Authentication;
import com.example.repositories.AuthenticationRepository;
import com.example.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private AuthenticationRepository authRepo;

    @Override
    public Authentication createAuthentication(Authentication auth) {
        return authRepo.save(auth);
    }

    @Override
    public List<Authentication> getAllAuthentications() {
        return authRepo.findAll();
    }

    @Override
    public Optional<Authentication> getAuthenticationById(int id) {
        return authRepo.findById(id);
    }

    @Override
    public Optional<Authentication> getAuthenticationByUsername(String username) {
        return authRepo.findByUsername(username);
    }

   

    @Override
    public void deleteAuthentication(int id) {
        authRepo.deleteById(id);
    }
}
