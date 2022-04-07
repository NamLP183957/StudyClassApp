package com.example.studyclassapp.service;

import com.example.studyclassapp.modal.user.User;

import java.util.Map;

public interface AuthenticationService {

    Map<String, String> login(String email, String password);

    String registerUser(User user, String password2);

    String activeCode(String code);
}
