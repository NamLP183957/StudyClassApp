package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.auth.RegistrationRequest;

import com.example.studyclassapp.dto.user.UserResponse;
import com.example.studyclassapp.modal.user.User;
import com.example.studyclassapp.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final ModelMapper modelMapper;
    private final ClassService classService;

    public User convertToEntity(RegistrationRequest registrationRequest) {
        return modelMapper.map(registrationRequest, User.class);
    }

    public UserResponse convertToDtoResponse(User user) {
        return modelMapper.map(user, UserResponse.class);
    }

    public List<UserResponse> convertToListDtoResponse(List<User> users) {
        return users.stream()
                .map(this::convertToDtoResponse)
                .collect(Collectors.toList());
    }

    public List<UserResponse> getUsersInClass(String email, Long classId) {
        return convertToListDtoResponse(classService.getStudentInClass(email, classId));
    }
}
