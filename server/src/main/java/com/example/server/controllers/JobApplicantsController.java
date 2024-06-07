package com.example.server.controllers;

import com.example.server.dtos.ApplicantDtos;
import com.example.server.dtos.JobApplicantDtos;
import com.example.server.exception.JobApplicantNotFound;
import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.models.JobApplicantsModel;
import com.example.server.services.JobApplicantsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/jobconnect/jobapplicants")
public class JobApplicantsController {
    @Autowired
    private JobApplicantsService jobApplicantsService;

    @GetMapping
    public ResponseEntity<?> GETAll() {
        if (jobApplicantsService.GETAll().isEmpty()) {
            return ResponseEntity.status(204).body(new JobApplicantDtos("NO CONTENT", 204, null));
        }
        List<JobApplicantsModel> jobApplicantsLists = jobApplicantsService.GETAll();
        return ResponseEntity.status(200).body(new JobApplicantDtos("OK", 200, jobApplicantsLists));
    }

    @PostMapping
    public ResponseEntity<?> POST(@RequestBody @Valid JobApplicantsModel body, Errors e) {
        if (e.hasErrors()) {
            return ResponseEntity.status(400).body(new JobApplicantDtos("BAD REQUEST", 400, null));
        }
        JobApplicantsModel addedJobApplicants = jobApplicantsService.POST(body);
        List<JobApplicantsModel> jobApplicantList = Collections.singletonList(addedJobApplicants);
        return ResponseEntity.status(200).body(new JobApplicantDtos("OK", 200, jobApplicantList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> PUT(@RequestBody @Valid JobApplicantsModel body, @PathVariable Integer id, Errors e) {
        if (e.hasErrors()) {
            return ResponseEntity.status(400).body(new JobApplicantDtos("BAD REQUEST", 400, null));
        }
        try {
            JobApplicantsModel updated = jobApplicantsService.PUTByID(body, id);
            List<JobApplicantsModel> jobApplicantLists = Collections.singletonList(updated);
            return ResponseEntity.status(200).body(new JobApplicantDtos("OK", 200, jobApplicantLists));
        } catch (JobApplicantNotFound err) {
            return ResponseEntity.status(404).body(new JobApplicantDtos("NOT FOUND", 404, null));
        }
    }
}
