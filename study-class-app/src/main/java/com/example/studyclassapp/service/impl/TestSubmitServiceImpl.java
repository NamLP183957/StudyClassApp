package com.example.studyclassapp.service.impl;

import com.example.studyclassapp.dto.submission.QuestionSubmitRequest;
import com.example.studyclassapp.dto.submission.TestSubmitRequest;
import com.example.studyclassapp.exception.ClassPermissionException;
import com.example.studyclassapp.exception.TestSubmitException;
import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.modal.question.Question;
import com.example.studyclassapp.modal.submission.QuestionSubmit;
import com.example.studyclassapp.modal.submission.TestSubmit;
import com.example.studyclassapp.modal.user.User;
import com.example.studyclassapp.repository.QuestionRepository;
import com.example.studyclassapp.repository.TestRepository;
import com.example.studyclassapp.repository.TestSubmitRepository;
import com.example.studyclassapp.repository.UserRepository;
import com.example.studyclassapp.service.TestService;
import com.example.studyclassapp.service.TestSubmitService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.jni.Local;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TestSubmitServiceImpl implements TestSubmitService {
    private final UserRepository userRepository;
    private final TestRepository testRepository;
    private final TestSubmitRepository testSubmitRepository;
    private final QuestionRepository questionRepository;

    @Override
    public TestSubmit startTest(String email, Long testId) {
        User user = userRepository.findByEmail(email);
        Test test = testRepository.getById(testId);
        TestSubmit testSubmitFromDB = testSubmitRepository.findTopBySubmitUserAndTestOrderByStartTimeDesc(user, test);

        if (testSubmitFromDB != null) {
            if (!testSubmitFromDB.isDone()) {
                throw new TestSubmitException("You are in this test doing");
            }
        }

        TestSubmit testSubmit = new TestSubmit();
        testSubmit.setSubmitUser(user);
        testSubmit.setTest(test);
        testSubmit.setDone(false);

        testSubmit.setStartTime(LocalDateTime.now());
        testSubmit.setEndTime(LocalDateTime.now().plusMinutes(test.getLeng()));

        return testSubmitRepository.save(testSubmit);
    }

    @Override
    public TestSubmit submitTest(String email, Long testSubmitId, TestSubmitRequest testSubmitRequest) {
        TestSubmit testSubmit = testSubmitRepository.getById(testSubmitId);
        if (!testSubmit.getSubmitUser().getEmail().equals(email)) {
            throw new ClassPermissionException("Unauthority", HttpStatus.FORBIDDEN);
        }

        testSubmit.setSubmitTime(LocalDateTime.now());
        testSubmit.setDone(true);

        // Save submit and get total mark
        List<QuestionSubmitRequest> questionSubmitRequestList = testSubmitRequest.getQuestionSubmitRequestList();
        Long quesId;
        String answer;
        Question question;
        for (QuestionSubmitRequest quesSubmitRequst : questionSubmitRequestList) {
            quesId = quesSubmitRequst.getQuestionId();
            answer = quesSubmitRequst.getAnswer();
            question = questionRepository.getById(quesId);
            testSubmit.getQuestionSubmitList().add(new QuestionSubmit(question, answer));
        }
        testSubmit.setTotalMark();

        return testSubmitRepository.save(testSubmit);
    }

//    private Integer getMerk(TestSubmitRequest testSubmitRequest) {
//
//        Integer totalMark = 0;
//        Long quesId;
//        String answer;
//        Question question;
//        for (QuestionSubmitRequest quesSubmitRequst : questionSubmitRequestList) {
//            quesId = quesSubmitRequst.getQuestionId();
//            answer = quesSubmitRequst.getAnswer();
//            question = questionRepository.getById(quesId);
//            totalMark += question.getMark(answer);
//        }
//        return totalMark;
//    }
}
