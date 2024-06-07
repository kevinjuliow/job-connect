package com.example.server.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Data
@Table(name = "job_applicants")
public class JobApplicantsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_job_applicants;

    @ManyToOne
    @JoinColumn(name = "id_job")
    private JobsModel jobsModel;

    @ManyToOne
    @JoinColumn(name = "id_applicant")
    private ApplicantsModel applicantsModel;

    @Column(name = "apply_date")
    private LocalDate applyDate;
}
