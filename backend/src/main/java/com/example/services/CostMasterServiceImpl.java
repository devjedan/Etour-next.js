package com.example.services;

import com.example.models.CostMaster;
import com.example.repositories.CostMasterRepository;
import com.example.services.CostMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CostMasterServiceImpl implements CostMasterService {

    @Autowired
    private CostMasterRepository costMasterRepository;

    @Override
    public CostMaster saveCost(CostMaster costMaster) {
        return costMasterRepository.save(costMaster);
    }

    @Override
    public Optional<CostMaster> getCostById(int id) {
        return costMasterRepository.findById(id);
    }

    @Override
    public List<CostMaster> getAllCosts() {
        return costMasterRepository.findAll();
    }

}
