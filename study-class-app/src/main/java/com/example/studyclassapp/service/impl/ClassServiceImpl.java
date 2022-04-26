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
import lombok.RequiredArgsConstructor;
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


    @Override
    public Class addClass(String email, Class clas) {
        User user = userRepository.findByEmail(email);

        clas.setCode(UUID.randomUUID().toString().substring(6));
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

        if (clas.equals(ClassScope.PUBLIC)) {
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
        return classRepository.findByCreateUserAndJoinUserContaining(user, pageable);
    }
}
