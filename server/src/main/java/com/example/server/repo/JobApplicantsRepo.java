package com.example.server.repo;

import com.example.server.models.JobApplicantsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicantsRepo extends JpaRepository<JobApplicantsModel , Integer> {
}
