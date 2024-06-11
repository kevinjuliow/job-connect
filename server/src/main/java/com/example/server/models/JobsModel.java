package com.example.server.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Data
@Table(name = "jobs")
public class JobsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_job;

    @ManyToOne
    @JoinColumn(name = "id_company")
    private CompaniesModel companiesModel;

    @Column(nullable = false)
    private String position;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String description;

    @Column()
    private Double salary;

    @Column(nullable = false)
    private String jobType;

//    @ManyToMany(mappedBy = "jobApplicants")
//    private Set<ApplicantsModel> applicants = new HashSet<>();
}
