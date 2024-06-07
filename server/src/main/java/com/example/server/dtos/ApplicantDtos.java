package com.example.server.dtos;

import com.example.server.models.ApplicantsModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ApplicantDtos {
    private String status;
    private Integer code;
    private List<ApplicantsModel> data;


    public ApplicantDtos(String status, Integer code, List<ApplicantsModel> data) {
        this.status = status;
        this.code = code;
        this.data = data;
    }

}
