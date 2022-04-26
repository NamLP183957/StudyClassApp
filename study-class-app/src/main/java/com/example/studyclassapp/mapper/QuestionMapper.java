package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.dto.pagination.PaginationResponse;
import com.example.studyclassapp.dto.question.QuestionRequest;
import com.example.studyclassapp.dto.question.QuestionResponse;
import com.example.studyclassapp.modal.question.Question;
import com.example.studyclassapp.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class QuestionMapper {
    private final ModelMapper modelMapper;
    private final ChoiceMapper choiceMapper;
    private final QuestionService questionService;

    public Question convertToEntity(QuestionRequest questionRequest) {
//        List<ChoiceRequest> choiceRequests = questionRequest.getChoiceList();
        Question question = modelMapper.map(questionRequest, Question.class);
//        question.setChoiceList(choiceMapper.convertToListEntity(choiceRequests));
        return question;
    }

    public List<Question> convertToListEntity(List<QuestionRequest> questionRequests) {
        return questionRequests.stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }

    QuestionResponse convertToDtoResponse(Question question) {
        return modelMapper.map(question, QuestionResponse.class);
    }

    List<QuestionResponse> convertToListDtoResponse(List<Question> questionList) {
        return questionList.stream()
                .map(this::convertToDtoResponse)
                .collect(Collectors.toList());
    }

    PaginationResponse convertToPaginationResponse(Page<Question> questionPage) {
        PaginationResponse paginationResponse = new PaginationResponse();
        List<Question> questionList = questionPage.getContent();
        paginationResponse.setContent(convertToListDtoResponse(questionList));
        paginationResponse.setTotalPages(questionPage.getTotalPages());
        return paginationResponse;
    }

    public PaginationResponse getQuestion(String email, Long testId, PaginationRequest paginationRequest) {
        return convertToPaginationResponse(questionService.getQuestionPagination(email, testId, paginationRequest));
    }

}
