package com.example.repositories;

import com.example.models.PackageMaster;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
public interface PackageRepository extends JpaRepository<PackageMaster, Integer> {

    List<PackageMaster> findByCategory_CtgMasterId(Integer ctgMasterId);

    // fetch packages under category with itineraries eagerly
    @Query("""
        SELECT DISTINCT p FROM PackageMaster p
        LEFT JOIN FETCH p.itineraries i
        WHERE p.category.ctgMasterId = :ctgMasterId
    """)
    List<PackageMaster> findByCategoryWithItineraries(@Param("ctgMasterId") Integer ctgMasterId);

    // fetch single package with its itineraries
    @Query("""
        SELECT p FROM PackageMaster p
        LEFT JOIN FETCH p.itineraries i
        WHERE p.packageId = :packageId
    """)
    PackageMaster findByPackageIdWithItineraries(@Param("packageId") Integer packageId);
}
