package com.example.studyclassapp.exception;

import lombok.Getter;

@Getter
public class TestSubmitException extends RuntimeException {
    private final String message;

    public TestSubmitException(String message) {
        this.message = message;
    }
}
