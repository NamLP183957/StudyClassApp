package com.example.studyclassapp.controller;

import com.example.studyclassapp.dto.auth.AuthenticationRequest;
import com.example.studyclassapp.dto.auth.RegistrationRequest;
import com.example.studyclassapp.exception.InputFieldException;
import com.example.studyclassapp.mapper.AuthenticationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationMapper authenticationMapper;

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody @Valid RegistrationRequest request,
                                               BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new InputFieldException(bindingResult);
        } else {
            return ResponseEntity.ok(authenticationMapper.registerUser(request));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody @Valid AuthenticationRequest userRequest,
                                        BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InputFieldException(bindingResult);
        } else {
            return ResponseEntity.ok(authenticationMapper.login(userRequest.getEmail(), userRequest.getPassword()));
        }
    }

    @GetMapping("/active/{code}")
    public ResponseEntity<Object> activeAccount(@PathVariable("code")String activeCode) {
        return ResponseEntity.ok(authenticationMapper.activeAccount(activeCode));
    }

}
