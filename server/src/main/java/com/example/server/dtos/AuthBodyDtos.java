package com.example.server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthBodyDtos {
    private String email ;
    private String password ;

}
