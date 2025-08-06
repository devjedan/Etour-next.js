package com.example.services;

import com.example.models.Customer;
import com.example.repositories.CustomerRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> getCustomerById(int id) {
        return customerRepository.findById(id);
    }

    @Override
    public Customer createCustomer(Customer createCust) {
//    		Customer c = new Customer();
//    		c.setCustId(createCust.getCustId());
        return customerRepository.save(createCust);
    }

}
