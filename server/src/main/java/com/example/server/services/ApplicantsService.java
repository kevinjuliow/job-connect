package com.example.server.services;

import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.repo.ApplicantsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service    
public class ApplicantsService {
    @Autowired
    private ApplicantsRepo applicantsRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<ApplicantsModel> GETAll() {
        return applicantsRepo.findAll();
    }

    public ApplicantsModel GETByID(Integer id) throws UserNotFound {
        Optional<ApplicantsModel> existsApplicant = applicantsRepo.findById(id);
        if (existsApplicant.isPresent()){
            return existsApplicant.get();
        }
        throw new UserNotFound("Not Found");
    }

    public ApplicantsModel GETByEmail(String email) throws UserNotFound {
        ApplicantsModel foundUser = applicantsRepo.findApplicantsModelByEmail(email);
        if (foundUser != null) return foundUser  ;
        else throw new UserNotFound("Not Found");
    }

    public ApplicantsModel POST(ApplicantsModel applicantsModel){
        String encryptedPassword = passwordEncoder.encode(applicantsModel.getPassword());
        applicantsModel.setPassword(encryptedPassword);
        return applicantsRepo.save(applicantsModel);
    }

    public ApplicantsModel PUTByID (ApplicantsModel applicantsModel , Integer id) throws UserNotFound {
        ApplicantsModel existsApplicant = applicantsRepo.findById(id).orElseThrow(()->new UserNotFound("Not Found"));
        if (applicantsModel.getEmail() != null && !applicantsModel.getEmail().isEmpty()) existsApplicant.setEmail(applicantsModel.getEmail());
        if (applicantsModel.getPassword() != null && !applicantsModel.getPassword().isEmpty()) {
            String encryptedPassword = passwordEncoder.encode(applicantsModel.getPassword());
            existsApplicant.setPassword(encryptedPassword);
        }
        if (applicantsModel.getFull_name() != null && !applicantsModel.getFull_name().isEmpty()) existsApplicant.setFull_name(applicantsModel.getFull_name());
        if (applicantsModel.getAddress() != null && !applicantsModel.getAddress().isEmpty()) existsApplicant.setAddress(applicantsModel.getAddress());
        if (applicantsModel.getPhone() != null && !applicantsModel.getPhone().isEmpty()) existsApplicant.setPhone(applicantsModel.getPhone());
        if (applicantsModel.getCv() != null && !applicantsModel.getCv().isEmpty()) existsApplicant.setCv(applicantsModel.getCv());

        return applicantsRepo.save(existsApplicant);
    }

    public void DELETEByID(Integer id) throws UserNotFound{
        ApplicantsModel existsApplicant = applicantsRepo.findById(id).orElseThrow(()->new UserNotFound("Not Found"));
        applicantsRepo.delete(existsApplicant);
    }
}
