package com.example.studyclassapp.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ClassroomNotFoundException extends RuntimeException{
    private HttpStatus httpStatus;

    public ClassroomNotFoundException(String msg) {
        super(msg);
    }

    public ClassroomNotFoundException(String msg, HttpStatus httpStatus) {
        super(msg);
        this.httpStatus = httpStatus;
    }

}
