package com.example.studyclassapp.service;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.modal.submission.TestSubmit;
import org.springframework.data.domain.Page;

public interface TestService {
    Test getTest(String email, Long testId);
    Test addTest(Test test, Long classId, String email);
    Page<Test> getTestPagination(String email, Long classId, PaginationRequest paginationRequest);
    Page<Test> searchTestPagination(String email, Long classId, String searchKey, PaginationRequest paginationRequest);

}
