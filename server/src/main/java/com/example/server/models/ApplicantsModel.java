package com.example.server.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Data
@Table(name = "applicants")
public class ApplicantsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_applicant;

    @Column(nullable = false, unique = true)
    private String email;

    @Column()
    private String password;

    @Column(length = 512)
    private String full_name;

    @Column(length = 512)
    private String address;

    @Column
    private LocalDate birth_date;

    @Column(length = 20)
    private String phone;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String cv;

    @Column
    private String logo;

//    @ManyToMany
//    @JoinTable(
//            name = "job_applicants",
//            joinColumns = @JoinColumn(name = "id_applicant"),
//            inverseJoinColumns = @JoinColumn(name = "id_job")
//    )
//    private Set<JobsModel> jobApplicants = new HashSet<>();
}
