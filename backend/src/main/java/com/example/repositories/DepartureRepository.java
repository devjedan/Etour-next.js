package com.example.repositories;

import com.example.models.Departure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartureRepository extends JpaRepository<Departure, Integer> {
}
