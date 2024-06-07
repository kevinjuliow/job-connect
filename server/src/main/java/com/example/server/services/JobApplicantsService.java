package com.example.server.services;

import com.example.server.exception.JobApplicantNotFound;
import com.example.server.models.JobApplicantsModel;
import com.example.server.repo.JobApplicantsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicantsService {
    @Autowired
    private JobApplicantsRepo jobApplicantsRepo ;

    public List<JobApplicantsModel> GETAll() {
        return jobApplicantsRepo.findAll();
    }
    public JobApplicantsModel POST(JobApplicantsModel jobApplicantsModel){
        jobApplicantsModel.setStatus("pending");
        return jobApplicantsRepo.save(jobApplicantsModel);
    }

    public JobApplicantsModel PUTByID(JobApplicantsModel jobApplicantsModel , Integer id) throws JobApplicantNotFound {
        JobApplicantsModel existsJobApplication = jobApplicantsRepo.findById(id).orElseThrow(()->new JobApplicantNotFound("Not Found"));
        if (jobApplicantsModel.getStatus() != null && !jobApplicantsModel.getStatus().isEmpty()) existsJobApplication.setStatus(jobApplicantsModel.getStatus());
        return jobApplicantsRepo.save(existsJobApplication);
    }


}
