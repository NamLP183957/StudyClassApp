package com.example.studyclassapp.service.impl;

import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.exception.ClassPermissionException;
import com.example.studyclassapp.exception.ClassroomNotFoundException;
import com.example.studyclassapp.modal.Choice;
import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.repository.ClassRepository;
import com.example.studyclassapp.repository.TestRepository;
import com.example.studyclassapp.service.ClassService;
import com.example.studyclassapp.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService {
    private final ClassService classService;
    private final TestRepository testRepository;
    private final ClassRepository classRepository;

    @Override
    public Test addTest(Test test, Long classId, String email) {
        Optional<Class> classFromDB = classRepository.findById(classId);

        if (!classFromDB.isPresent()) {
            throw new ClassroomNotFoundException("This class is not available", HttpStatus.NOT_FOUND);
        }

        Class clas = classFromDB.get();

        if (!classService.isCreateUser(clas, email)) {
            throw new ClassPermissionException("You don't have enough permission", HttpStatus.FORBIDDEN);
        }

        test.setClasss(clas);

        return testRepository.save(test);
    }

    @Override
    public Page<Test> getTestPagination(String email, Long classId, PaginationRequest paginationRequest) {
        Class clas = classRepository.getById(classId);

        if (!classService.isCreateUser(clas, email)) {
            if (!classService.isJoinUser(clas, email)) {
                throw new ClassPermissionException("You don't have enough permission", HttpStatus.FORBIDDEN);
            }
        }

        Pageable pageable = PageRequest.of(paginationRequest.getPage(), paginationRequest.getItemsPerPage());
        return testRepository.getTestsByClasss(clas, pageable);
    }
}
