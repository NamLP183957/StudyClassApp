package com.example.studyclassapp.dto.test;

import com.example.studyclassapp.dto.question.QuestionRequest;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Data
public class TestRequest {
    @NotBlank(message = "Name cannot empty")
    private String name;

//    private Date startTime;

    private Long leng;

//    private Date closeTime;

    private String note;

    private List<QuestionRequest> questionList;

    private Long classId;
}
