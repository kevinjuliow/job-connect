package com.example.server.repo;

import com.example.server.models.CompaniesModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompaniesRepo extends JpaRepository<CompaniesModel, Integer> {

    Optional<CompaniesModel> findCompanyByUsername(String name);

}
