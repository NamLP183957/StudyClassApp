package com.example.studyclassapp.service;

import com.example.studyclassapp.dto.clas.ClassRequest;
import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.user.User;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ClassService {

    Class addClass(String email, Class clas);

    Class getClassById(String email, Long id);

    boolean isCreateUser(Class clas, String email);

    boolean isJoinUser(Class clas, String email);

    Page<Class> getListClass(String email, PaginationRequest paginationRequest);

    Page<Class> getListClassByKeyAndScope(String email, String key, String scope, PaginationRequest paginationRequest);

    Class joinClassByCode(String email, String code);

    List<User> getStudentInClass(String email, Long classId);
}
