package com.example.studyclassapp.controller;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.dto.test.TestRequest;
import com.example.studyclassapp.exception.InputFieldException;
import com.example.studyclassapp.mapper.TestMapper;
import com.example.studyclassapp.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/test")
@RequiredArgsConstructor
public class TestController {

    private final TestMapper testMapper;

    @PostMapping()
    public ResponseEntity<Object> addTest(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                          @RequestBody @Valid TestRequest testRequest,
                                          BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InputFieldException(bindingResult);
        } else {
            return ResponseEntity.ok(testMapper.addTest(testRequest, testRequest.getClassId(), userPrincipal.getEmail()));
        }
    }

    @PostMapping("/pagination")
    public ResponseEntity<Object> getTestInClass(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                                 @RequestParam("class-id")Long classId,
                                                 @RequestBody PaginationRequest paginationRequest) {
        return ResponseEntity.ok(testMapper.getTestPagination(userPrincipal.getEmail(), classId, paginationRequest));
    }
}
