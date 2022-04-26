package com.example.studyclassapp.controller;

import com.example.studyclassapp.dto.submission.TestSubmitRequest;
import com.example.studyclassapp.mapper.TestSubmitMapper;
import com.example.studyclassapp.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/test-submit")
public class TestSubmitController {

    private final TestSubmitMapper testSubmitMapper;

    @PostMapping("/start-test")
    public ResponseEntity<Object> startTest(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                            @RequestParam("test-id")Long testId) {
        return ResponseEntity.ok(testSubmitMapper.startTest(userPrincipal.getEmail(), testId));
    }

    @PostMapping()
    public ResponseEntity<Object> submitTest(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                             @RequestParam("test-submit-id")Long testSubmitId,
                                             @RequestBody TestSubmitRequest testSubmitRequest) {
        return ResponseEntity.ok(testSubmitMapper.submitTest(userPrincipal.getEmail(), testSubmitId, testSubmitRequest));
    }
}
