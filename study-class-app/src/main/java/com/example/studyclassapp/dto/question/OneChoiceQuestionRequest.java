package com.example.studyclassapp.dto.question;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonTypeName("One choice question")
public class OneChoiceQuestionRequest extends QuestionRequest{

    private List<ChoiceRequest> choiceList;
}
