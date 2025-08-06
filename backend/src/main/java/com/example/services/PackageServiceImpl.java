package com.example.services;

import com.example.models.PackageMaster;
import com.example.repositories.PackageRepository;
import com.example.services.PackageService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PackageServiceImpl implements PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Override
    @Transactional(readOnly = true)
    public List<PackageMaster> getPackagesByCategory(Integer ctgMasterId) {
        return packageRepository.findByCategory_CtgMasterId(ctgMasterId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PackageMaster> getPackagesWithItinerariesByCategory(Integer ctgMasterId) {
        return packageRepository.findByCategoryWithItineraries(ctgMasterId);
    }

    @Override
    @Transactional(readOnly = true)
    public PackageMaster getPackageById(Integer packageId) {
        return packageRepository.findById(packageId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Package not found with id " + packageId));
    }

    @Override
    @Transactional(readOnly = true)
    public PackageMaster getPackageWithItineraryById(Integer packageId) {
        PackageMaster pkg = packageRepository.findByPackageIdWithItineraries(packageId);
        if (pkg == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Package not found with id " + packageId);
        }
        return pkg;
    }
}