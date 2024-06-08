package com.example.server.controllers;

import com.example.server.dtos.AuthBodyDtos;
import com.example.server.dtos.AuthBodyResponse;
import com.example.server.dtos.CompanyDtos;
import com.example.server.exception.UserNotFound;
import com.example.server.models.ApplicantsModel;
import com.example.server.models.CompaniesModel;
import com.example.server.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/jobconnect/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    private AuthService authService;
    @PostMapping()
    public ResponseEntity<?> login(@RequestBody AuthBodyDtos body) {
        Optional<?> foundUser = authService.Auth(body);

        if (foundUser.isPresent()) {
            if (foundUser.get() instanceof CompaniesModel) {
                return ResponseEntity.status(200).body(new AuthBodyResponse("OK", 200, ((CompaniesModel) foundUser.get())));
            } else if (foundUser.get() instanceof ApplicantsModel) {
                return ResponseEntity.status(200).body(new AuthBodyResponse("OK", 200, ((ApplicantsModel) foundUser.get())));
            } else {
                return ResponseEntity.status(401).body(new AuthBodyResponse("UNAUTHORIZED", 401, ((ApplicantsModel) null)));
            }
        } else {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }
}
