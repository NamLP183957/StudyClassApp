package com.example.studyclassapp.dto.submission;

import lombok.Data;

import java.util.List;

@Data
public class TestSubmitRequest {

    private List<QuestionSubmitRequest> questionSubmitRequestList;

}
