package com.example.services;

import com.example.models.ItineraryMaster;

import java.util.List;
import java.util.Optional;
public interface ItineraryService {
    List<ItineraryMaster> getItinerariesByPackage(Integer packageId);
}