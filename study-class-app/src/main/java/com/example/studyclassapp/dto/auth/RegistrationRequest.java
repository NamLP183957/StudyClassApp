package com.example.studyclassapp.dto.auth;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class RegistrationRequest {
    @Email(message = "Incorrect email")
    @NotBlank(message = "Email cannot be empty")
    private String email;

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @Size(min = 6, max = 16, message = "Password must be in 6 and 16 charators long")
    private String password;

    @Size(min = 6, max = 16, message = "Re-Password must be in 6 and 16 charators long")
    private String password2;
}
