package com.example.services;

import com.example.models.CostMaster;
import java.util.List;
import java.util.Optional;

public interface CostMasterService {
    CostMaster saveCost(CostMaster costMaster);
    Optional<CostMaster> getCostById(int id);
    List<CostMaster> getAllCosts();
  
}
