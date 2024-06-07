package com.example.server.dtos;

import com.example.server.models.ApplicantsModel;
import com.example.server.models.CompaniesModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CompanyDtos {
    private String status;
    private Integer code;
    private List<CompaniesModel> data;

    public CompanyDtos(String status, Integer code, List<CompaniesModel> data) {
        this.status = status;
        this.code = code;
        this.data = data;
    }
}
