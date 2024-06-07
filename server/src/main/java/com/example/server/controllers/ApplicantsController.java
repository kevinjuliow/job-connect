package com.example.server.controllers;

import com.example.server.dtos.ApplicantDtos;
import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.services.ApplicantsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobconnect/applicants")
public class ApplicantsController {
    @Autowired
    private ApplicantsService applicantsService ;

    @GetMapping
    public ResponseEntity<?> GETAll(){
        if (applicantsService.GETAll().isEmpty()){
            return ResponseEntity.status(204).body(new ApplicantDtos("No Content" , 204 , (List<ApplicantsModel>) null));
        }
        List<ApplicantsModel> applicantsLists = applicantsService.GETAll();
        return ResponseEntity.status(200).body(new ApplicantDtos("OK" , 200 , applicantsLists));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> GETByID (@PathVariable Integer id){
        try{
            ApplicantsModel existsApplicant = applicantsService.GETByID(id);
            return ResponseEntity.status(200).body(new ApplicantDtos("OK" , 200 , existsApplicant));
        }catch (UserNotFound err){
            return ResponseEntity.status(404).body(new ApplicantDtos("Not Found" , 404 , ((ApplicantsModel) null)));
        }
    }
    @PostMapping
    public ResponseEntity<?> POST (@RequestBody @Valid ApplicantsModel body , Errors e){
        if (e.hasErrors()) return ResponseEntity.status(400).body(new ApplicantDtos("Bad Request" , 400 , ((List<ApplicantsModel>) null)));
        ApplicantsModel addedApplicants = applicantsService.POST(body);
        return ResponseEntity.status(200).body(new ApplicantDtos("OK" , 200 , addedApplicants));
    }
    

}
