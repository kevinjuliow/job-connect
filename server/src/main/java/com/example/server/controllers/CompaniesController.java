package com.example.server.controllers;

import com.example.server.services.CompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jobconnect")
public class CompaniesController {

    @Autowired
    private CompaniesService companiesService;

//    @PostMapping
//    public ResponseEntity<?> POST() {
//
//    }
}
