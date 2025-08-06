package com.example.controllers;

import com.example.models.Authentication;
import com.example.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authentication")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationService authService;

    @PostMapping
    public ResponseEntity<Authentication> create(@RequestBody Authentication auth) {
        return ResponseEntity.ok(authService.createAuthentication(auth));
    }

    @GetMapping
    public ResponseEntity<List<Authentication>> getAll() {
        return ResponseEntity.ok(authService.getAllAuthentications());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Authentication> getById(@PathVariable int id) {
        return authService.getAuthenticationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/by-username/{username}")
    public ResponseEntity<Authentication> getByUsername(@PathVariable String username) {
        return authService.getAuthenticationByUsername(username)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        authService.deleteAuthentication(id);
        return ResponseEntity.noContent().build();
    }
}
