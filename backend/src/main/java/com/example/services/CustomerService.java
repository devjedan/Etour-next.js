package com.example.services;

import com.example.models.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    List<Customer> getAllCustomers();
    Optional<Customer> getCustomerById(int id);
    Customer createCustomer(Customer customer);
    
}
