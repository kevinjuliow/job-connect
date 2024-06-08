package com.example.server.dtos;

import com.example.server.models.ApplicantsModel;
import com.example.server.models.CompaniesModel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
public class AuthBodyResponse {
    private String status;
    private Integer code;
    private CompaniesModel companies;
    private ApplicantsModel applicants ;

    public AuthBodyResponse(String status, Integer code, CompaniesModel companies) {
        this.status = status;
        this.code = code;
        this.companies =companies;
    }
    public AuthBodyResponse(String status, Integer code, ApplicantsModel applicants) {
        this.status = status;
        this.code = code;
        this.applicants = applicants;
    }
}
