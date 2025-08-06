package com.example.controllers;

import com.example.models.CostMaster;
import com.example.services.CostMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/costs")
@CrossOrigin(origins = "*")
public class CostMasterController {

    @Autowired
    private CostMasterService costMasterService;


    @GetMapping("/{id}")
    public ResponseEntity<CostMaster> getCostById(@PathVariable int id) {
        return costMasterService.getCostById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<CostMaster>> getAllCosts() {
        return ResponseEntity.ok(costMasterService.getAllCosts());
    }

}
