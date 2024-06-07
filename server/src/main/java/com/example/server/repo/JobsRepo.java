package com.example.server.repo;

import com.example.server.models.JobsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobsRepo extends JpaRepository<JobsModel , Integer> {
}
