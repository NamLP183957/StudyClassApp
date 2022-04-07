package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.auth.AuthenticationResponse;
import com.example.studyclassapp.dto.auth.RegistrationRequest;
import com.example.studyclassapp.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class AuthenticationMapper {
    private final AuthenticationService authenticationService;
    private final UserMapper userMapper;

    public String registerUser(RegistrationRequest registrationRequest) {
        return authenticationService.registerUser(userMapper.convertToEntity(registrationRequest), registrationRequest.getPassword2());
    }

    public AuthenticationResponse login(String email, String password) {
        Map<String, String> attributes = authenticationService.login(email, password);
        AuthenticationResponse response = new AuthenticationResponse();
        response.setEmail(attributes.get("email"));
        response.setToken(attributes.get("token"));
        response.setUserRole(attributes.get("userRole"));
        return response;
    }

    public String activeAccount(String code) {
        return authenticationService.activeCode(code);
    }
}
