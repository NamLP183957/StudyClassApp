package com.example.studyclassapp.dto.choice;

import lombok.Data;

@Data
public class ChoiceRequest {
    private String title;
    private boolean isAnswer;
    private String imageURL;
}
