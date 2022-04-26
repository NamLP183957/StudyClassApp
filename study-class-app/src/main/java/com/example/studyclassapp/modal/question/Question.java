package com.example.studyclassapp.modal.question;

import com.example.studyclassapp.modal.Choice;
import com.example.studyclassapp.modal.Test;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "question")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue(value = "question")
public abstract class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_id_seq")
    @SequenceGenerator(name = "question_id_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private String title;
    private Integer mark;
    private String imageURL;

    @ManyToOne
    private Test test;

    @Column(name = "type", insertable = false, updatable = false)
    private String type;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "question_id", referencedColumnName = "id")
//    private List<Choice> choiceList;

    public abstract void hideAnswer();

    public abstract Integer getMark(String answer);
}
