package com.example.studyclassapp.dto.choice;

import lombok.Data;

@Data
public class ChoiceResponse {
    private Long id;
    private String title;
    private boolean isAnswer;
    private String imageURL;
}
