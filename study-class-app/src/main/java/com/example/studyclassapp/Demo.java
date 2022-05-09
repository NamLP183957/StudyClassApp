package com.example.studyclassapp;

import com.example.studyclassapp.modal.ClassScope;

import java.util.UUID;

public class Demo {

    public static void main(String[] args) {
        ClassScope classScope = ClassScope.valueOf("PRIVATE");
        System.out.println(classScope.values());
    }
}
