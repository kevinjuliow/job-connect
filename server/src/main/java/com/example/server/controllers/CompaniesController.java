package com.example.server.controllers;

import com.example.server.dtos.ApplicantDtos;
import com.example.server.dtos.CompanyDtos;
import com.example.server.exception.CompanyNotFound;
import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.models.CompaniesModel;
import com.example.server.services.CompaniesService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/jobconnect/companies")
@CrossOrigin
public class CompaniesController {

    @Autowired
    private CompaniesService companiesService;

    @GetMapping
    public ResponseEntity<?> GETAll() {
        if (companiesService.GETAll().isEmpty()) {
            return ResponseEntity.status(204).body(new CompanyDtos("NO CONTENT", 204, null));
        }
        List<CompaniesModel> companiesLists = companiesService.GETAll();
        return ResponseEntity.status(200).body(new CompanyDtos("OK", 200, companiesLists));
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> GETById(@PathVariable String name) {
        try {
            CompaniesModel existsCompany = companiesService.GETByName(name);
            List<CompaniesModel> companyList = Collections.singletonList(existsCompany);
            return ResponseEntity.status(200).body(new CompanyDtos("OK", 200, companyList));
        } catch (CompanyNotFound err) {
            return ResponseEntity.status(404).body(new CompanyDtos("NOT FOUND", 404, null));
        }
    }

    @PostMapping
    public ResponseEntity<?> POST(@RequestBody @Valid CompaniesModel body, Errors e) {
        if (e.hasErrors()) {
            return ResponseEntity.status(400).body(new CompanyDtos("BAD REQUEST", 400, ((List<CompaniesModel>) null)));
        }
        CompaniesModel addedCompanies = companiesService.POST(body);
        List<CompaniesModel> companyList = Collections.singletonList(addedCompanies);
        return ResponseEntity.status(201).body(new CompanyDtos("CREATED", 201, companyList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> PUT(@RequestBody @Valid CompaniesModel body, @PathVariable Integer id, Errors e) {
        if (e.hasErrors()) {
            return ResponseEntity.status(400).body(new CompanyDtos("BAD REQUEST", 400, ((List<CompaniesModel>) null)));
        }
        try {
            CompaniesModel updated = companiesService.PUTByID(id, body);
            List<CompaniesModel> companyList = Collections.singletonList(updated);
            return ResponseEntity.status(200).body(new CompanyDtos("OK", 200, companyList));
        } catch (CompanyNotFound err) {
            return ResponseEntity.status(404).body(new CompanyDtos("NOT FOUND", 404, null));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> DELETE(@PathVariable Integer id) {
        try {
            companiesService.DELETEByID(id);
            return ResponseEntity.status(200).body(new CompanyDtos("OK", 200, null));
        } catch (CompanyNotFound err) {
            return ResponseEntity.status(404).body(new CompanyDtos("NOT FOUND", 404, null));
        }
    }
}
