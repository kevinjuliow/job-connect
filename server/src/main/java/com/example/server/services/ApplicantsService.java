package com.example.server.services;

import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.repo.ApplicantsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicantsService {
    @Autowired
    private ApplicantsRepo applicantsRepo ;

    public List<ApplicantsModel> GETAll(){
        return applicantsRepo.findAll();
    }

    public ApplicantsModel GETByID(Integer id) throws UserNotFound {
        Optional<ApplicantsModel> existsApplicant = applicantsRepo.findById(id);
        if (existsApplicant.isPresent()){
            return existsApplicant.get();
        }
        throw new UserNotFound("Not Found");
    }
}
