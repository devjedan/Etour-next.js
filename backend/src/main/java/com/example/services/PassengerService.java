package com.example.services;

import com.example.models.Passenger;

import java.util.List;
import java.util.Optional;

public interface PassengerService {
    Passenger savePassenger(Passenger passenger);
    List<Passenger> getAllPassengers();
    Optional<Passenger> getPassengerById(int id);
    void deletePassenger(int id);
    Passenger savePassengerWithCustomer(int custId, Passenger passenger);

}
