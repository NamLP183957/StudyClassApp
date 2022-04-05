package com.example.studyclassapp.dto.user;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class UserRequest {

    @Email(message = "Incorrect email")
    @NotBlank(message = "This email must be not blank")
    private String email;

    @NotBlank(message = "This password must be not blank")
    private String password;

    private String firstName;
    private String lastName;
    private MultipartFile file;
}
