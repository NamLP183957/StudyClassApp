package com.example.studyclassapp.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Map;

public class ApiExceptionHandler {

    @ExceptionHandler(InputFieldException.class)
    public ResponseEntity<Map<String, String>> handleInputFieldException(InputFieldException inputFieldException) {
        InputFieldException inputFieldException1 = new InputFieldException(inputFieldException.getBindingResult());
        return ResponseEntity.badRequest().body(inputFieldException.getErrorMap());
    }
}
