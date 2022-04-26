package com.example.studyclassapp.controller;

import com.example.studyclassapp.dto.clas.ClassRequest;
import com.example.studyclassapp.exception.InputFieldException;
import com.example.studyclassapp.mapper.ClassMapper;
import com.example.studyclassapp.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/class")
@RequiredArgsConstructor
public class ClassController {
    private final ClassMapper classMapper;

    @PostMapping("")
    public ResponseEntity<Object> addClass(@RequestBody @Valid ClassRequest classRequest,
                                           @AuthenticationPrincipal UserPrincipal userPrincipal,
                                           BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InputFieldException(bindingResult);
        } else {
            return ResponseEntity.ok(classMapper.addClass(userPrincipal.getEmail(), classRequest));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getClass(@PathVariable("id")Long id,
                                           @AuthenticationPrincipal UserPrincipal userPrincipal) {
        return ResponseEntity.ok(classMapper.getClassById(userPrincipal.getEmail(), id));
    }


}
