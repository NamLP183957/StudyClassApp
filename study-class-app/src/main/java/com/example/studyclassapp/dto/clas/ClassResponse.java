package com.example.studyclassapp.dto.clas;

import com.example.studyclassapp.dto.test.TestResponse;
import com.example.studyclassapp.dto.user.UserResponse;
import com.example.studyclassapp.modal.ClassScope;
import com.example.studyclassapp.modal.user.User;
import lombok.Data;

import java.util.List;

@Data
public class ClassResponse {
    private Long id;

    private String name;
    private String description;
    private String code;

    private ClassScope scope;
//    private List<TestResponse> testList;
    private UserResponse createUser;
}
