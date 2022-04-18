package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {

    Page<Test> getTestsByClasss(Class classs, Pageable pageable);
}
