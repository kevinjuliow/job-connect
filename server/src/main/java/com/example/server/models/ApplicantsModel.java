package com.example.server.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
@Table(schema = "applicants")
public class ApplicantsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_applicant;

    @Column(nullable = false, unique = true)
    private String email ;
    @Column(nullable = false)
    private String password ;
    @Column(length = 512 , nullable = false)
    private String full_name;
    @Column(length = 512)
    private String address;
    private LocalDate birth_date ;
    @Column(nullable = false, length = 20)
    private String phone ;
    @Column(length = 255)
    private String cv ;
}
