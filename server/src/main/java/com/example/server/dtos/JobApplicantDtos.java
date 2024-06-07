package com.example.server.dtos;

import com.example.server.models.ApplicantsModel;
import com.example.server.models.JobApplicantsModel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class JobApplicantDtos {
    private String status;
    private Integer code;
    private List<JobApplicantsModel> data;

    public JobApplicantDtos(String status, Integer code, List<JobApplicantsModel> data) {
        this.status = status;
        this.code = code;
        this.data = data;
    }
}
