package com.example.services;

import com.example.models.Departure;
import com.example.repositories.DepartureRepository;
import com.example.services.DepartureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartureServiceImpl implements DepartureService {

    @Autowired
    private DepartureRepository departureRepository;

    @Override
    public Departure saveDeparture(Departure departure) {
        return departureRepository.save(departure);
    }

    @Override
    public Optional<Departure> getDepartureById(int id) {
        return departureRepository.findById(id);
    }

    @Override
    public List<Departure> getAllDepartures() {
        return departureRepository.findAll();
    }

    @Override
    public void deleteDeparture(int id) {
        departureRepository.deleteById(id);
    }
}
