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

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/jobconnect/applicants")
public class ApplicantsController {
    @Autowired
    private ApplicantsService applicantsService;

    @GetMapping
    public ResponseEntity<?> GETAll() {
        if (applicantsService.GETAll().isEmpty()) {
            return ResponseEntity.status(204).body(new ApplicantDtos("NO CONTENT", 204, null));
        }
        List<ApplicantsModel> applicantsLists = applicantsService.GETAll();
        return ResponseEntity.status(200).body(new ApplicantDtos("OK", 200, applicantsLists));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> GETByID(@PathVariable Integer id) {
        try {
            ApplicantsModel existsApplicant = applicantsService.GETByID(id);
            List<ApplicantsModel> applicantList = Collections.singletonList(existsApplicant);
            return ResponseEntity.status(200).body(new ApplicantDtos("OK", 200, applicantList));
        } catch (UserNotFound err) {
            return ResponseEntity.status(404).body(new ApplicantDtos("NOT FOUND", 404, null));
        }
    }

    @PostMapping
    public ResponseEntity<?> POST(@RequestBody @Valid ApplicantsModel body, Errors e) {
        if (e.hasErrors()) {
            return ResponseEntity.status(400).body(new ApplicantDtos("BAD REQUEST", 400, ((List<ApplicantsModel>) null)));
        }
        ApplicantsModel addedApplicants = applicantsService.POST(body);
        List<ApplicantsModel> applicantList = Collections.singletonList(addedApplicants);
        return ResponseEntity.status(201).body(new ApplicantDtos("CREATED", 201, applicantList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> PUT(@RequestBody @Valid ApplicantsModel body, @PathVariable Integer id, Errors e) {
        if (e.hasErrors()) {
            return ResponseEntity.status(400).body(new ApplicantDtos("BAD REQUEST", 400, ((List<ApplicantsModel>) null)));
        }
        try {
            ApplicantsModel updated = applicantsService.PUTByID(body, id);
            List<ApplicantsModel> applicantList = Collections.singletonList(updated);
            return ResponseEntity.status(200).body(new ApplicantDtos("OK", 200, applicantList));
        } catch (UserNotFound err) {
            return ResponseEntity.status(404).body(new ApplicantDtos("NOT FOUND", 404, null));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> DELETE(@PathVariable Integer id) {
        try {
            applicantsService.DELETEByID(id);
            return ResponseEntity.status(200).body(new ApplicantDtos("OK", 200, null));
        } catch (UserNotFound err) {
            return ResponseEntity.status(404).body(new ApplicantDtos("NOT FOUND", 404, null));
        }
    }
}
