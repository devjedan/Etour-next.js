package com.example.repositories;

import com.example.models.CostMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CostMasterRepository extends JpaRepository<CostMaster, Integer> {
   
}
