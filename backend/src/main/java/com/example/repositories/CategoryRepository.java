package com.example.repositories;

import com.example.models.CategoryMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface CategoryRepository extends JpaRepository<CategoryMaster, Integer> {

    // root categories: no parent (subCtgName is null) and not special (flag = false)
    List<CategoryMaster> findBySubCtgNameIsNullAndFlagFalse();

    // subcategories under a given parent name (assuming subCtgName holds parent)
    List<CategoryMaster> findBySubCtgNameAndFlagFalse(String subCtgName);

    // find category by business ctgId
    Optional<CategoryMaster> findByCtgId(String ctgId);

    // special categories (flag = true)
   // @Query("Select c from categorymaster c where c.flag = true")
    List<CategoryMaster> findByFlagTrue();
}

