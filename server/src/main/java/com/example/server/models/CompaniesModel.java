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

    @Column()
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column()
    private String password;

    @Column(length = 512)
    private String address;

    @Column()
    private String country;

    @Column(length = 20)
    private String phone;

    @Column()
    private String logo;

    @Column()
    private String website;
}
