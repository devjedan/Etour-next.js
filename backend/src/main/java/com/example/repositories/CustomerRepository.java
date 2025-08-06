package com.example.repositories;

import com.example.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Optional<Customer> findByCustEmail(String email);  // for future use like login/lookup
}
