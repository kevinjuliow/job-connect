package com.example.server.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class ApplicantsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_applicant;

    @Column(length = 50)
    private String email ;

    
}
