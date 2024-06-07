package com.example.server.repo;

import com.example.server.models.ApplicantsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppplicantsRepo extends JpaRepository<ApplicantsModel , Integer> {
}
