package com.example.server.dtos;

import com.example.server.models.ApplicantsModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicantDtos {
    private String status ;
    private Integer code ;
    private List<ApplicantsModel> data ;
}
