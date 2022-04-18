package com.example.studyclassapp.service;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.modal.Test;
import org.springframework.data.domain.Page;

public interface TestService {
    Test addTest(Test test, Long classId, String email);
    Page<Test> getTestPagination(String email, Long classId, PaginationRequest paginationRequest);
}
