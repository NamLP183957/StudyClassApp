package com.example.studyclassapp.dto.auth;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String email;
    private String userRole;
    private String token;
}
