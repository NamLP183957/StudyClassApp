package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.example.studyclassapp.dto.question.QuestionRequest;
import com.example.studyclassapp.modal.Choice;
import com.example.studyclassapp.modal.Question;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class QuestionMapper {
    private final ModelMapper modelMapper;
    private final ChoiceMapper choiceMapper;

    public Question convertToEntity(QuestionRequest questionRequest) {
        List<ChoiceRequest> choiceRequests = questionRequest.getChoiceList();
        Question question = modelMapper.map(questionRequest, Question.class);
        question.setChoiceList(choiceMapper.convertToListEntity(choiceRequests));
        return question;
    }

    public List<Question> convertToListEntity(List<QuestionRequest> questionRequests) {
        return questionRequests.stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
