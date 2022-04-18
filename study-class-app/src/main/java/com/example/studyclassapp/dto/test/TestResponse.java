package com.example.studyclassapp.dto.test;

import com.example.studyclassapp.dto.question.QuestionResponse;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class TestResponse {
    private Long id;

    private String name;
//    private Date startTime;
    private Long leng;
//    private Date closeTime;
    private String note;

    private List<QuestionResponse> questionList;
}
