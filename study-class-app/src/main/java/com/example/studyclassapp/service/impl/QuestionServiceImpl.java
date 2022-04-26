package com.example.studyclassapp.service.impl;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.exception.ClassPermissionException;
import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.question.Question;
import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.repository.QuestionRepository;
import com.example.studyclassapp.repository.TestRepository;
import com.example.studyclassapp.service.ClassService;
import com.example.studyclassapp.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final TestRepository testRepository;
    private final ClassService classService;
    private final QuestionRepository questionRepository;

    @Override
    public Page<Question> getQuestionPagination(String email, Long testId, PaginationRequest paginationRequest) {
        Test test = testRepository.getById(testId);
        Class clas = test.getClasss();
        Pageable pageable = PageRequest.of(paginationRequest.getPage(), paginationRequest.getItemsPerPage());
        Page<Question> questionPage = questionRepository.getQuestionsByTest(test, pageable);

        if ( !classService.isCreateUser(clas, email) ) {
            if ( !classService.isJoinUser(clas, email) ) {
                throw new ClassPermissionException("You don't have enough permission", HttpStatus.FORBIDDEN);
            } else {
                List<Question> questionList = questionPage.getContent();
                for (Question question : questionList) {
                    question.hideAnswer();
                }
            }
        }

        return questionPage;
    }
}
