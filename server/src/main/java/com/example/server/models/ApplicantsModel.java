package com.example.server.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
public class ApplicantsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_applicant;

    @Column(length = 255)
    private String email ;
    @Column(length = 255)
    private String password ;
    @Column(length = 512)
    private String full_name;
    @Column(length = 512)
    private String address;
    private LocalDate birth_date ;
    @Column(length = 20)
    private String phone ;
    @Column(length = 255)
    private String cv ;
}
