package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {

    Page<Test> getTestsByClasss(Class classs, Pageable pageable);

    Page<Test> findByNameContainingAndClasss(String searchKey, Class clas, Pageable pageable);
}
