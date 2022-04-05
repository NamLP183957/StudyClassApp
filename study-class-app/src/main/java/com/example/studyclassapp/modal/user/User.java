package com.example.studyclassapp.modal.user;

import com.example.studyclassapp.modal.Class;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
    @SequenceGenerator(name = "user_id_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private String email;
    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "user_rolw", joinColumns = @JoinColumn(name = "user_id"))
    private Set<Role> roles;

    @OneToMany(mappedBy = "createUser")
    private List<Class> createClassList;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "student_class",
            joinColumns = {@JoinColumn(name = "student_id")},
            inverseJoinColumns = {@JoinColumn(name = "class_id")}
    )
    private List<Class> joinClass;
}
