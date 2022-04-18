package com.example.studyclassapp.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ClassPermissionException extends RuntimeException{
    private HttpStatus httpStatus;

    public ClassPermissionException(String msg) {
        super(msg);
    }

    public ClassPermissionException(String msg, HttpStatus httpStatus) {
        super(msg);
        this.httpStatus = httpStatus;
    }
}
