package com.example.studyclassapp.service;

import com.example.studyclassapp.dto.clas.ClassRequest;
import com.example.studyclassapp.modal.Class;

public interface ClassService {

    Class addClass(String email, Class clas);

    Class getClassById(String email, Long id);

    boolean isCreateUser(Class clas, String email);

    boolean isJoinUser(Class clas, String email);
}
