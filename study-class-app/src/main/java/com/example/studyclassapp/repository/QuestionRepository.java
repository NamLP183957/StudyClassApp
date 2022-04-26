package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.question.Question;
import com.example.studyclassapp.modal.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Page<Question> getQuestionsByTest(Test test, Pageable pageable);
}
