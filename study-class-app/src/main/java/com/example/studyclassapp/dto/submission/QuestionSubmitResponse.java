package com.example.studyclassapp.dto.submission;

import com.example.studyclassapp.dto.question.QuestionResponse;
import lombok.Data;

@Data
public class QuestionSubmitResponse {
    private Long id;

    private QuestionResponse question;

    private String answer;

    private Integer mark;
}
