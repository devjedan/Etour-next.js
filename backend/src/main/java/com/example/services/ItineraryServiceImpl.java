package com.example.services;

import com.example.models.ItineraryMaster;
import com.example.repositories.ItineraryRepository;
import com.example.services.ItineraryService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class ItineraryServiceImpl implements ItineraryService {

	@Autowired
    private ItineraryRepository itineraryRepository;

    @Override
    @Transactional(readOnly = true)
    public List<ItineraryMaster> getItinerariesByPackage(Integer packageId) {
        List<ItineraryMaster> list = itineraryRepository.findByPackageMaster_PackageIdOrderByDayNoAsc(packageId);
        if (list.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "No itineraries found for package id " + packageId);
        }
        return list;
    }
}