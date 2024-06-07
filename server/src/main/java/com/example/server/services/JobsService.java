package com.example.server.services;

import com.example.server.exception.JobNotFound;
import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.models.JobsModel;
import com.example.server.repo.JobsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobsService {
    @Autowired
    private JobsRepo jobsRepo;



    public List<JobsModel> GETAll() {
        return jobsRepo.findAll();
    }

    public JobsModel GETByID(Integer id) throws JobNotFound {
        Optional<JobsModel> existsJobs = jobsRepo.findById(id);
        if (existsJobs.isPresent()){
            return existsJobs.get();
        }
        throw new JobNotFound("Not Found");
    }

    public JobsModel POST (JobsModel jobsModel){
        return jobsRepo.save(jobsModel);
    }

    public JobsModel PUTByID (JobsModel jobsModel , Integer id) throws JobNotFound {
        JobsModel existsJobs = jobsRepo.findById(id).orElseThrow(()->new JobNotFound("Not Found"));
        if (jobsModel.getPosition() != null && !jobsModel.getPosition().isEmpty()) existsJobs.setPosition(jobsModel.getPosition());
        if (jobsModel.getDescription() != null && !jobsModel.getDescription().isEmpty()) existsJobs.setDescription(jobsModel.getDescription());
        if (jobsModel.getSalary() != null) existsJobs.setSalary(jobsModel.getSalary());
        if (jobsModel.getJobType() != null && !jobsModel.getJobType().isEmpty()) existsJobs.setJobType(jobsModel.getJobType());

        return jobsRepo.save(existsJobs);
    }

    public void DELETEByID(Integer id) throws JobNotFound{
        JobsModel existsJob = jobsRepo.findById(id).orElseThrow(()->new JobNotFound("Not Found"));
        jobsRepo.delete(existsJob);
    }
}
