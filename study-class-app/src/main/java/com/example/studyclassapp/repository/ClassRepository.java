package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    Optional<Class>  findById(Long id);
}