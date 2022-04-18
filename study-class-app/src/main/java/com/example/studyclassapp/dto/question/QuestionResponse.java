package com.example.studyclassapp.dto.question;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.example.studyclassapp.dto.choice.ChoiceResponse;
import lombok.Data;

import java.util.List;

@Data
public class QuestionResponse {
    private Long id;
    private String title;
    private Integer mark;
    private String imageURL;
    private List<ChoiceResponse> choiceList;
}
