package com.example.services;

import com.example.models.CategoryMaster;
import com.example.models.PackageMaster;
import com.example.repositories.CategoryRepository;
import com.example.repositories.PackageRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepo;

    @Autowired
    private PackageRepository packageRepo;

    @Override
    public List<CategoryMaster> getRootCategories() {
        return categoryRepo.findBySubCtgNameIsNullAndFlagFalse();
    }

    @Override
    public List<CategoryMaster> getSubcategories(String parentName) {
        return categoryRepo.findBySubCtgNameAndFlagFalse(parentName);
    }

    @Override
    public Integer getCategoryMasterIdByCtgId(String ctgId) {
        CategoryMaster cm = categoryRepo.findByCtgId(ctgId)
                .orElseThrow(() -> new EntityNotFoundException("Category not found: " + ctgId));
        return cm.getCtgMasterId();
    }

    @Override
    public List<PackageMaster> getPackagesByCategoryMasterId(Integer ctgMasterId) {
        return packageRepo.findByCategory_CtgMasterId(ctgMasterId);
    }

    @Override
    public List<CategoryMaster> getSpecialCategories() {
        return categoryRepo.findByFlagTrue();
    }
}