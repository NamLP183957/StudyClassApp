package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.dto.pagination.PaginationResponse;
import com.example.studyclassapp.dto.question.QuestionRequest;
import com.example.studyclassapp.dto.test.TestRequest;
import com.example.studyclassapp.dto.test.TestResponse;
import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.service.TestService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class TestMapper {
    private final TestService testService;
    private final ModelMapper modelMapper;
    private final QuestionMapper questionMapper;

    Test convertToEntity(TestRequest testRequest) {
        return modelMapper.map(testRequest, Test.class);
    }

    TestResponse convertToDtoResponse(Test test) {
        return modelMapper.map(test, TestResponse.class);
    }

    List<TestResponse> convertToListDtoResponse(List<Test> testList) {
        return testList.stream()
                .map(this::convertToDtoResponse)
                .collect(Collectors.toList());
    }

    PaginationResponse consertToDtoResponse(Page<Test> testsPage) {
        List<Test> testList = testsPage.getContent();
        PaginationResponse paginationResponse = new PaginationResponse();
        paginationResponse.setContent(convertToListDtoResponse(testList));
        paginationResponse.setTotalPages(testsPage.getTotalPages());
        return paginationResponse;
    }

    public TestResponse addTest(TestRequest testRequest, Long classId, String email) {
        return convertToDtoResponse(testService.addTest(convertToEntity(testRequest), classId, email));
    }

    public PaginationResponse getTestPagination(String email, Long classId, PaginationRequest paginationRequest) {
        return consertToDtoResponse(testService.getTestPagination(email, classId, paginationRequest));
    }
}
