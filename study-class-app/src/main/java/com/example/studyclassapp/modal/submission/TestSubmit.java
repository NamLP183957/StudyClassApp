package com.example.studyclassapp.modal.submission;

import com.example.studyclassapp.modal.Test;
import com.example.studyclassapp.modal.question.Question;
import com.example.studyclassapp.modal.user.User;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class TestSubmit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "test_id")
    private Test test;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User submitUser;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private LocalDateTime submitTime;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "test_submit_id", referencedColumnName = "id")
    private List<QuestionSubmit> questionSubmitList;

    private Integer totalMark;

    private boolean isDone;

    public void setTotalMark() {
        totalMark = 0;
        System.out.println("question list size: " + questionSubmitList.size());
        for (QuestionSubmit qSubmit : questionSubmitList) {
            totalMark += qSubmit.getMark();
        }
    }
}
