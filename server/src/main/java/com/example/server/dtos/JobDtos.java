package com.example.server.dtos;

import com.example.server.models.ApplicantsModel;
import com.example.server.models.JobsModel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class JobDtos {
    private String status;
    private Integer code;
    private List<JobsModel> data;


    public JobDtos(String status, Integer code, List<JobsModel> data) {
        this.status = status;
        this.code = code;
        this.data = data;
    }

}
