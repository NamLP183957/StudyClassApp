package com.example.studyclassapp.dto.auth;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class AuthenticationRequest {
    @Email(message = "Incorrect email")
    @NotBlank(message = "This email must be not blank")
    private String email;

    @NotBlank(message = "This password must be not blank")
    private String password;
}
