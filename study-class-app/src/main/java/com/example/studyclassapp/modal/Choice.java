package com.example.studyclassapp.modal;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "choice")
public class Choice {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "choice_id_seq")
    @SequenceGenerator(name = "choice_id_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private String title;
    private String imageURL;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    private boolean isAnswer;
}
