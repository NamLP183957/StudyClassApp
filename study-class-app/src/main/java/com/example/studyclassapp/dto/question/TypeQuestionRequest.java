package com.example.studyclassapp.dto.question;

import com.example.studyclassapp.dto.question.QuestionRequest;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;

@JsonTypeName("Type question")
@Getter
@Setter
public class TypeQuestionRequest extends QuestionRequest {
    private String answer;
}
