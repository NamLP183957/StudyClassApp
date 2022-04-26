package com.example.studyclassapp.modal.submission;

import com.example.studyclassapp.modal.question.Question;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Data
public class QuestionSubmit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    private String answer;

    public QuestionSubmit() {

    }
    public QuestionSubmit(Question question, String answer) {
        this.question = question;
        this.answer = answer;
    }

    public Integer getMark() {
        return question.getMark(this.answer);
    }
}
