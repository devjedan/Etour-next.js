package com.example.controllers;

import com.example.models.CategoryMaster;
import com.example.models.PackageMaster;
import com.example.models.ItineraryMaster;
import com.example.services.CategoryService;
import com.example.services.PackageService;
import com.example.services.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class HomeController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private PackageService packageService;

    @Autowired
    private ItineraryService itineraryService;

    // 1. root categories
    @GetMapping("/categories")
    public ResponseEntity<List<CategoryMaster>> getRootCategories() {
        return ResponseEntity.ok(categoryService.getRootCategories());
    }

    // 2. subcategories of a parent category name (ctgId)
    @GetMapping("/categories/{parentName}")
    public ResponseEntity<List<CategoryMaster>> getSubcategories(@PathVariable String parentName) {
        return ResponseEntity.ok(categoryService.getSubcategories(parentName));
    }

    // 3. packages under a (sub)category including itineraries
    @GetMapping("/categories/{ctgId}/")
    @Transactional(readOnly = true)
    public ResponseEntity<List<PackageMaster>> getPackagesByCategory(@PathVariable String ctgId) {
        Integer ctgMasterId = categoryService.getCategoryMasterIdByCtgId(ctgId);
        List<PackageMaster> packages = packageService.getPackagesWithItinerariesByCategory(ctgMasterId);
        return ResponseEntity.ok(packages);
    }

    // 4. special categories → directly packages (with itineraries)
    @GetMapping("/categories/special/packages")
    @Transactional(readOnly = true)
    public ResponseEntity<List<PackageMaster>> getSpecialCategoryPackages() {
        List<CategoryMaster> specials = categoryService.getSpecialCategories();
        List<PackageMaster> allPackages = specials.stream()
                .flatMap(cat -> packageService.getPackagesWithItinerariesByCategory(cat.getCtgMasterId()).stream())
                .collect(Collectors.toList());
        return ResponseEntity.ok(allPackages);
    }

    // 5. specific package itinerary
    @GetMapping("/{ctgId}/{packageId}")
    public ResponseEntity<List<ItineraryMaster>> getItinerary(@PathVariable Integer packageId) {
        List<ItineraryMaster> itinerary = itineraryService.getItinerariesByPackage(packageId);
        return ResponseEntity.ok(itinerary);
    }

    // 6. package detail including itinerary
    @GetMapping("/packages/{packageId}")
    @Transactional(readOnly = true)
    public ResponseEntity<PackageMaster> getPackageDetail(@PathVariable Integer packageId) {
        PackageMaster pkg = packageService.getPackageWithItineraryById(packageId);
        return ResponseEntity.ok(pkg);
    }
    
   

}