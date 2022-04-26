package com.example.studyclassapp.repository;

import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.modal.submission.TestSubmit;
import com.example.studyclassapp.modal.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestSubmitRepository extends JpaRepository<TestSubmit, Long> {

    TestSubmit findTopBySubmitUserAndTestOrderByStartTimeDesc(User submitUser, Test test);
}
