package com.example.repositories;

import com.example.models.ItineraryMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItineraryRepository extends JpaRepository<ItineraryMaster, Integer> {
    List<ItineraryMaster> findByPackageMaster_PackageIdOrderByDayNoAsc(Integer packageId);
}
