package com.example.server.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "companies")
public class CompaniesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_company;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(length = 512)
    private String address;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column()
    private String logo;

    @Column()
    private String website;
}
