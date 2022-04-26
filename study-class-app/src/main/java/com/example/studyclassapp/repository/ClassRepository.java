package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    Optional<Class>  findById(Long id);
    Page<Class> findByCreateUserAndJoinUserContaining(User user, Pageable pageable);
}
