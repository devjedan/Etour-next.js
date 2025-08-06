package com.example.services;

import com.example.models.Departure;
import java.util.List;
import java.util.Optional;

public interface DepartureService {
    Departure saveDeparture(Departure departure);
    Optional<Departure> getDepartureById(int id);
    List<Departure> getAllDepartures();
    void deleteDeparture(int id);
}
