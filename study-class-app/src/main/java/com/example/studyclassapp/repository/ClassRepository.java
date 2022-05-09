package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.ClassScope;
import com.example.studyclassapp.modal.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    Optional<Class>  findById(Long id);

    @Query(value = "SELECT * FROM class WHERE (create_user_id = :userId) " +
                    "OR id IN (SELECT class_id FROM student_class WHERE student_id = :userId)",
            nativeQuery = true)
    Page<Class> getClassByUser(@Param("userId") Long userId, Pageable pageable);

    @Query(value = "SELECT * FROM class WHERE ((create_user_id = :userId) " +
            "OR id IN (SELECT class_id FROM student_class WHERE student_id = :userId)) " +
            "AND (scope = :scope)",
            nativeQuery = true)
    Page<Class> getClassBYUserAndScope(@Param("userId") Long userId, @Param("scope")String scope,
                                       Pageable pageable);

    Page<Class> getClassByNameContaining(String key, Pageable pageable);

    Page<Class> getClassByNameContainingAndScope(String key, ClassScope scope, Pageable pageable);

    Class getClassByCode(String code);
}
