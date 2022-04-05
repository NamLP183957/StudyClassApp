package com.example.studyclassapp.modal;

import com.example.studyclassapp.modal.user.User;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "class")
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "class_id_seq")
    @SequenceGenerator(name = "class_id_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private String name;
    private String decription;

    @Enumerated(EnumType.STRING)
    private ClassScope scope;

    @ManyToOne
    @JoinColumn(name = "create_user_id")
    private User createUser;

    @ManyToMany(mappedBy = "joinClass")
    private List<User> joinUser;

    @OneToMany(mappedBy = "classs")
    private List<Test> testList;
}
