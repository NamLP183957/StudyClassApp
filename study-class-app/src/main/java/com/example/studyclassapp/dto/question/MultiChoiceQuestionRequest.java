package com.example.studyclassapp.dto.question;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import java.util.List;

@Getter
@Setter
@JsonTypeName("Multi choice question")
public class MultiChoiceQuestionRequest extends QuestionRequest{

    private List<ChoiceRequest> choiceList;
}
