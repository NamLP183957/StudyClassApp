package com.example.studyclassapp.service;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.modal.question.Question;
import org.springframework.data.domain.Page;

public interface QuestionService {
    Page<Question> getQuestionPagination(String email, Long testId, PaginationRequest paginationRequest);
}
