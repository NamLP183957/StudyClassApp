package com.example.studyclassapp.dto.question;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import lombok.Data;

import java.util.List;

@Data
public class QuestionRequest {
    private String title;
    private Integer mark;
    private String imageURL;
    private List<ChoiceRequest> choiceList;
}
