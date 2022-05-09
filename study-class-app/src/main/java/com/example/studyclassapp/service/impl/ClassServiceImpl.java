package com.example.studyclassapp.service.impl;

import com.example.studyclassapp.dto.clas.ClassRequest;
import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.exception.ClassPermissionException;
import com.example.studyclassapp.exception.ClassroomNotFoundException;
import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.ClassScope;
import com.example.studyclassapp.modal.user.User;
import com.example.studyclassapp.repository.ClassRepository;
import com.example.studyclassapp.repository.UserRepository;
import com.example.studyclassapp.service.ClassService;
import com.example.studyclassapp.service.email.MailSender;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClassServiceImpl implements ClassService {
    private final UserRepository userRepository;
    private final ClassRepository classRepository;
    private final MailSender mailSender;
    private Logger LOG = LoggerFactory.getLogger(this.getClass().getName());

    @Override
    public Class addClass(String email, Class clas) {
        User user = userRepository.findByEmail(email);

        clas.setCode(UUID.randomUUID().toString().substring(0, 7));
        clas.setCreateUser(user);
        return classRepository.save(clas);
    }

    @Override
    public Class getClassById(String email, Long id) {
        User user = userRepository.findByEmail(email);
        Optional<Class> classFromDB = classRepository.findById(id);

        if (!classFromDB.isPresent()) {
            throw new ClassroomNotFoundException("This class is not found", HttpStatus.NOT_FOUND);
        }

        Class clas = classFromDB.get();

        if (clas.getScope().equals(ClassScope.PUBLIC)) {
            return clas;
        }

        if (isCreateUser(clas, email) || isJoinUser(clas, email)) {
            return clas;
        }

        throw new ClassPermissionException("You don't have permisson to join this class", HttpStatus.FORBIDDEN);
    }

    @Override
    public boolean isCreateUser(Class clas, String email) {
        return clas.getCreateUser().getEmail().equals(email);
    }

    @Override
    public boolean isJoinUser(Class clas, String email) {
        List<User> joinUsers = clas.getJoinUser();

        for (User user : joinUsers) {
            if (user.getEmail().equals(email)) {
                return true;
            }
        }

        return false;
    }

    @Override
    public Page<Class> getListClass(String email, PaginationRequest paginationRequest) {
        User user = userRepository.findByEmail(email);
        Pageable pageable = PageRequest.of(paginationRequest.getPage(), paginationRequest.getItemsPerPage());
        Page<Class> classPage = classRepository.getClassByUser(user.getId(), pageable);
        return classPage;
    }

    @Override
    public Page<Class> getListClassByKeyAndScope(String email, String key, String scope, PaginationRequest paginationRequest) {
        Pageable pageable = PageRequest.of(paginationRequest.getPage(), paginationRequest.getItemsPerPage());
        User user = userRepository.findByEmail(email);
        if (key.equals("")) {
            if (scope.equals("")) {
                return classRepository.getClassByUser(user.getId(), pageable);
            } else {
                return classRepository.getClassBYUserAndScope(user.getId(), scope, pageable);
            }
        } else {
            if (scope.equals("")) {
                return classRepository.getClassByNameContaining(key, pageable);
            } else{
                return classRepository.getClassByNameContainingAndScope(key, ClassScope.valueOf(scope), pageable);
            }
        }
    }

    @Override
    public Class joinClassByCode(String email, String code) {
        Class clasFromDB = classRepository.getClassByCode(code);

        if (clasFromDB == null) {
            throw new ClassroomNotFoundException("This class is not exist", HttpStatus.NOT_FOUND);
        }

        if (!isCreateUser(clasFromDB, email)) {
            if (!isJoinUser(clasFromDB, email)) {
                User user = userRepository.findByEmail(email);
                user.getJoinClass().add(clasFromDB);
                userRepository.save(user);
            }
        }

        return clasFromDB;
    }

    @Override
    public List<User> getStudentInClass(String email, Long classId) {
        Class clas = classRepository.getById(classId);

        if (clas == null) {
            throw new ClassroomNotFoundException("This class is not exist", HttpStatus.NOT_FOUND);
        }

        if (isCreateUser(clas, email) || isJoinUser(clas, email)) {
            return clas.getJoinUser();
        }

        throw new ClassPermissionException("You don't have permisson to join this class", HttpStatus.FORBIDDEN);
    }
}
