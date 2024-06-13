package com.example.server.controllers;

import com.example.server.dtos.ApplicantDtos;
import com.example.server.dtos.JobDtos;
import com.example.server.exception.JobNotFound;
import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.models.JobsModel;
import com.example.server.services.JobsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/jobconnect/jobs")
@CrossOrigin
public class JobsController {
    @Autowired
    private JobsService jobsService;

    @GetMapping
    public ResponseEntity<?> GETAll(){
        if (jobsService.GETAll().isEmpty()){
            return ResponseEntity.status(204).body(new JobDtos("No Content" , 204 ,  null));
        }
        List<JobsModel> jobLists = jobsService.GETAll();
        return ResponseEntity.status(200).body(new JobDtos("OK" , 200 , jobLists));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> GETByID (@PathVariable Integer id){
        try{
            JobsModel existsJob = jobsService.GETByID(id);
            List<JobsModel> jobLists = Collections.singletonList(existsJob);
            return ResponseEntity.status(200).body(new JobDtos("OK", 200, jobLists));
        }catch (JobNotFound err){
            return ResponseEntity.status(404).body(new JobDtos("Not Found" , 404 , null));
        }
    }

    @PostMapping
    public ResponseEntity<?> POST (@RequestBody @Valid JobsModel body , Errors e){
        if (e.hasErrors()) return ResponseEntity.status(400).body(new JobDtos("Bad Request" , 400 , null));
        JobsModel addedJobs = jobsService.POST(body);
        List<JobsModel> jobLists = Collections.singletonList(addedJobs);
        return ResponseEntity.status(201).body(new JobDtos("CREATED", 201, jobLists));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> PUT (@RequestBody @Valid JobsModel body , @PathVariable Integer id , Errors e){
        if (e.hasErrors()) return ResponseEntity.status(400).body(new JobDtos("Bad Request" , 400 , null));
        try{
            System.out.println(body);
            JobsModel updated = jobsService.PUTByID(body , id);
            List<JobsModel> jobLists = Collections.singletonList(updated);
//            return ResponseEntity.status(200).body(new JobDtos("OK", 200, jobLists));
            return ResponseEntity.ok().body(jobLists);
        }catch (JobNotFound err){
            return ResponseEntity.status(404).body(new JobDtos("Not Found" , 404 , null));
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> DELETE (@PathVariable Integer id){
        try{
            jobsService.DELETEByID(id);
            return ResponseEntity.status(200).body(new JobDtos("OK" , 200 ,  null));
        }catch (JobNotFound err){
            return ResponseEntity.status(404).body(new JobDtos("Not Found" , 404 ,  null));
        }
    }

    @PostMapping("/coba/{id}")
    public ResponseEntity<?> POSTCoba (@RequestBody @Valid JobsModel body , @PathVariable Integer id ,Errors e) throws JobNotFound {
        if (e.hasErrors()) return ResponseEntity.status(400).body(new JobDtos("Bad Request" , 400 , null));
        System.out.println(body.toString());
        JobsModel updated = jobsService.PUTByID(body , id);
        return ResponseEntity.ok().body(updated);
    }

}
