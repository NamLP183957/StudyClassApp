package com.example.studyclassapp.service;

import com.example.studyclassapp.dto.submission.TestSubmitRequest;
import com.example.studyclassapp.modal.submission.TestSubmit;

public interface TestSubmitService {
    TestSubmit startTest(String email, Long testId);
    TestSubmit submitTest(String email, Long testSubmitId, TestSubmitRequest testSubmitRequest);
}
