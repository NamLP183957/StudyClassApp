package com.example.studyclassapp.controller;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.mapper.QuestionMapper;
import com.example.studyclassapp.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/question")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionMapper questionMapper;

    @PostMapping("/pagination")
    public ResponseEntity<Object> getQuestioNPagination(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                                        @RequestParam("test-id")Long testId,
                                                        @RequestBody PaginationRequest paginationRequest) {
        return ResponseEntity.ok(questionMapper.getQuestion(userPrincipal.getEmail(), testId, paginationRequest));
    }
}
