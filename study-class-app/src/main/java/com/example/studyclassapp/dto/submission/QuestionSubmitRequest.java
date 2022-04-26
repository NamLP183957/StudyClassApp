package com.example.studyclassapp.dto.submission;

import lombok.Data;

@Data
public class QuestionSubmitRequest {
    private Long questionId;

    private String answer;
}
