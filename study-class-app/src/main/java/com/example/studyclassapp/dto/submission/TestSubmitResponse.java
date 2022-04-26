package com.example.studyclassapp.dto.submission;

import com.example.studyclassapp.dto.test.TestResponse;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class TestSubmitResponse {
    private Long id;
    private LocalDateTime startTime;
    private LocalDateTime submitTime;
    private TestResponse test;
    private List<QuestionSubmitResponse> questionSubmitList;

    private Integer totalMark;

    private boolean isDone;
}
