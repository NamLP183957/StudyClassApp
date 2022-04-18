package com.example.studyclassapp.dto.user;

import com.example.studyclassapp.modal.user.AuthProvider;
import com.example.studyclassapp.modal.user.Role;
import lombok.Data;

import java.util.Set;

@Data
public class UserResponse {
    private Long id;

    private String email;
    private String firstName;
    private String lastName;
    private String avatarURL;
    private AuthProvider provider;
    private Set<Role> roles;

}
