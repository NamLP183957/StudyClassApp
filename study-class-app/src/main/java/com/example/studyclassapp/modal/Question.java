package com.example.studyclassapp.modal;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_id_seq")
    @SequenceGenerator(name = "question_id_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private String title;
    private Integer mark;
    private String imageURL;

    @ManyToOne
    @JoinColumn(name = "test_id")
    private Test test;

    @OneToMany(mappedBy = "question")
    private List<Choice> choiceList;

}
