package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.submission.TestSubmitRequest;
import com.example.studyclassapp.dto.submission.TestSubmitResponse;
import com.example.studyclassapp.modal.submission.TestSubmit;
import com.example.studyclassapp.service.TestSubmitService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TestSubmitMapper {

    private final TestSubmitService testSubmitService;
    private final ModelMapper modelMapper;

    TestSubmitResponse convertToReponseDto(TestSubmit testSubmit) {
        return modelMapper.map(testSubmit, TestSubmitResponse.class);
    }

    public TestSubmitResponse startTest(String email, Long testId) {
        return convertToReponseDto(testSubmitService.startTest(email, testId));
    }

    public TestSubmitResponse submitTest(String email,
                                         Long testSubmitId,
                                         TestSubmitRequest testSubmitRequest) {
        return convertToReponseDto(testSubmitService.submitTest(email, testSubmitId, testSubmitRequest));
    }
}
