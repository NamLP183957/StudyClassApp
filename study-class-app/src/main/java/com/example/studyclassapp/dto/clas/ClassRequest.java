package com.example.studyclassapp.dto.clas;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ClassRequest {
    @NotBlank(message = "Name cannot empty")
    private String name;

    private String description;

    @NotBlank(message = "Scope cannot empty")
    private String scope;
}
