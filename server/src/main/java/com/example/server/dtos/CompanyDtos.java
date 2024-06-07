package com.example.server.dtos;

import com.example.server.models.CompaniesModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDtos {
    private String status;
    private Integer code;
    private List<CompaniesModel> data;
}
