package com.example.studyclassapp.exception;

import lombok.Getter;

@Getter
public class PasswordException extends RuntimeException{
    private final String message;

    public PasswordException(String message) {
        this.message = message;
    }
}
