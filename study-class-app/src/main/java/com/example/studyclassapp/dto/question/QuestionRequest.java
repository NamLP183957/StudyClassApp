package com.example.studyclassapp.dto.question;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;

import java.util.List;

@Data
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = MultiChoiceQuestionRequest.class, name = "Multi choice question"),
        @JsonSubTypes.Type(value = OneChoiceQuestionRequest.class, name = "One choice question"),
        @JsonSubTypes.Type(value = TypeQuestionRequest.class, name = "Type question")
})
public abstract class QuestionRequest {
    private String title;
    private Integer mark;
    private String imageURL;
    private String type;
//    private String answer;
//    private List<ChoiceRequest> choiceList;
}
