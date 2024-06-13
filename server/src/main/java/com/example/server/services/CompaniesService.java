package com.example.server.services;

import com.example.server.exception.CompanyNotFound;
import com.example.server.models.CompaniesModel;
import com.example.server.repo.CompaniesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompaniesService {

    @Autowired
    private CompaniesRepo companiesRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<CompaniesModel> GETAll() {
        return companiesRepo.findAll();
    }

    public CompaniesModel GETByName(String name) throws CompanyNotFound {
        Optional<CompaniesModel> existsCompany = companiesRepo.findCompanyByName(name);
        if (existsCompany.isPresent()) {
            return existsCompany.get();
        }
        throw new CompanyNotFound("Company isn't found");
    }

    public Optional<CompaniesModel> GETByID(Integer id) {
        return companiesRepo.findById(id);
    }

    public CompaniesModel POST(CompaniesModel companiesModel){
        String encryptedPassword = passwordEncoder.encode(companiesModel.getPassword());
        companiesModel.setPassword(encryptedPassword);
        return companiesRepo.save(companiesModel);
    }

    public CompaniesModel PUTByID(Integer id, CompaniesModel company) throws CompanyNotFound {
        CompaniesModel isExist = companiesRepo.findById(id)
                .orElseThrow(() -> new CompanyNotFound("Cannot update. Company isn't found with id " + id));

//        isExist.setAddress(company.getAddress());
//        isExist.setLogo(company.getLogo());
//        isExist.setPhone(company.getPhone());
//        isExist.setWebsite(company.getWebsite());
        if (company.getName() != null && !company.getName().isEmpty()) { isExist.setName(company.getName()); }
        if (company.getEmail() != null && !company.getEmail().isEmpty()) { isExist.setEmail(company.getEmail()); }
        if (company.getPassword() != null && !company.getPassword().isEmpty()) {
            String encryptedPassword = passwordEncoder.encode(company.getPassword());
            isExist.setPassword(encryptedPassword);
        }
        if (company.getAddress() != null && !company.getAddress().isEmpty()) { isExist.setAddress(company.getAddress()); }
        if (company.getCountry() != null && !company.getCountry().isEmpty()) { isExist.setCountry(company.getCountry()); }
        if (company.getPhone() != null && !company.getPhone().isEmpty()) { isExist.setPhone(company.getPhone()); }
        if (company.getLogo() != null && !company.getLogo().isEmpty()) { isExist.setLogo(company.getLogo()); }
        if (company.getWebsite() != null && !company.getWebsite().isEmpty()) { isExist.setWebsite(company.getWebsite()); }
        return companiesRepo.save(isExist);
    }

    public void DELETEByID(Integer id) throws CompanyNotFound {
        CompaniesModel isExist = companiesRepo.findById(id)
                .orElseThrow(() -> new CompanyNotFound("Cannot delete. Company isn't found with id " + id));
        companiesRepo.delete(isExist);
    }
}
