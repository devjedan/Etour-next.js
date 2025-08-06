package com.example.services;

import com.example.models.Customer;
import com.example.models.Passenger;
import com.example.repositories.CustomerRepository;
import com.example.repositories.PassengerRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PassengerServiceImpl implements PassengerService {

    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public Passenger savePassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    @Override
    public List<Passenger> getAllPassengers() {
        return passengerRepository.findAll();
    }

    @Override
    public Optional<Passenger> getPassengerById(int id) {
        return passengerRepository.findById(id);
    }

    
    @Override
    public Passenger savePassengerWithCustomer(int custId, Passenger passenger) {
        Customer customer = customerRepository.findById(custId)
            .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + custId));
        passenger.setCustomer(customer); // This requires @ManyToOne field in Passenger entity
        return passengerRepository.save(passenger);
    }
    
    @Override
    public void deletePassenger(int id) {
        passengerRepository.deleteById(id);
    }
    
    
}
