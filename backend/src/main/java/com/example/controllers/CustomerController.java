package com.example.controllers;

import com.example.models.Customer;
import com.example.services.CustomerService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    
    

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return ResponseEntity.ok(customerService.getAllCustomers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable int id) {
        return customerService.getCustomerById(id)
            .map(ResponseEntity::ok)
            .orElseThrow(() -> new EntityNotFoundException("Customer not found with id " + id));
    }

   
    @PostMapping
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer createCust) {
       createCust.setCustCreatedAt(new Timestamp(System.currentTimeMillis()));
        Customer savedCustomer = customerService.createCustomer(createCust);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
    }

}
