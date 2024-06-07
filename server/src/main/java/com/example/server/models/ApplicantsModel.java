package com.example.server.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class ApplicantsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_applicant;

    private String email ;


}
