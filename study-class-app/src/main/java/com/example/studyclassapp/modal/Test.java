package com.example.studyclassapp.modal;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "test_id_seq")
    @SequenceGenerator(name = "test_id_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private String name;
    private Long startTime;
    private Long leng;
    private Long closeTime;
    private String note;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Class classs;

    @OneToMany(mappedBy = "test")
    private List<Question> questionList;

}
