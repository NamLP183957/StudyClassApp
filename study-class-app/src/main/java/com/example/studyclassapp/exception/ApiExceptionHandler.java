package com.example.studyclassapp.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Map;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(InputFieldException.class)
    public ResponseEntity<Map<String, String>> handleInputFieldException(InputFieldException inputFieldException) {
        InputFieldException inputFieldException1 = new InputFieldException(inputFieldException.getBindingResult());
        return ResponseEntity.badRequest().body(inputFieldException.getErrorMap());
    }

    @ExceptionHandler(PasswordException.class)
    public ResponseEntity<String> handlePasswordException(PasswordException passwordException) {
        return ResponseEntity.badRequest().body(passwordException.getMessage());
    }

    @ExceptionHandler(ApiRequestException.class)
    public ResponseEntity<String> handleApiRequestException(ApiRequestException apiRequestException) {
        return ResponseEntity.status(apiRequestException.getHttpStatus()).body(apiRequestException.getMessage());
    }

    @ExceptionHandler(ClassroomNotFoundException.class)
    public ResponseEntity<String> handleClassroomNotFoundException(ClassroomNotFoundException classroomNotFoundException) {
        return ResponseEntity.status(classroomNotFoundException.getHttpStatus()).body(classroomNotFoundException.getMessage());
    }

    @ExceptionHandler(ClassPermissionException.class)
    public ResponseEntity<String> handleClassPermissionException(ClassPermissionException classPermissionException) {
        return ResponseEntity.status(classPermissionException.getHttpStatus()).body(classPermissionException.getMessage());
    }
}
