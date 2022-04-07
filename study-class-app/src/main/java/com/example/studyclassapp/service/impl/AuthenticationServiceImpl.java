package com.example.studyclassapp.service.impl;

import com.example.studyclassapp.exception.ApiRequestException;
import com.example.studyclassapp.exception.EmailException;
import com.example.studyclassapp.exception.PasswordException;
import com.example.studyclassapp.modal.user.AuthProvider;
import com.example.studyclassapp.modal.user.Role;
import com.example.studyclassapp.modal.user.User;
import com.example.studyclassapp.repository.UserRepository;
import com.example.studyclassapp.security.jwt.JWTProvider;
import com.example.studyclassapp.service.AuthenticationService;
import com.example.studyclassapp.service.email.MailSender;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JWTProvider jwtProvider;
    private final MailSender mailSender;
    private final PasswordEncoder passwordEncoder;

    @Value("${hostname}")
    private String hostname;


    @Override
    public Map<String, String> login( String email, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        User user = userRepository.findByEmail(email);
        String role = user.getRoles().iterator().next().toString();
        Map<String, String> attributes = new HashMap<>();
        attributes.put("email", user.getEmail());
        attributes.put("userRole", role);
        attributes.put("token", jwtProvider.createToken(email, role));
        return attributes;
    }

    @Override
    public String registerUser(User user, String password2) {

        if (user.getPassword() != null && !user.getPassword().equals(password2)) {
            throw new PasswordException("Passwrods do not match");
        }

        String email = user.getEmail();
        User userFromDB = userRepository.findByEmail(email);

        if (userFromDB != null) {
            throw new EmailException("This email is already used");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setActive(false);
        user.setActivationCode(UUID.randomUUID().toString());
        user.setProvider(AuthProvider.LOCAL);
        user.setRoles(Collections.singleton(Role.USER));
        userRepository.save(user);

        // Send email
        String subject = "Activation code";
        String template = "registration-template";
        Map<String, Object> attributes = new HashMap<>();
        attributes.put("firstName", user.getFirstName());
        attributes.put("registrationUrl", "http://" + hostname + "/active/" + user.getActivationCode());
        mailSender.sendMessageHtml(user.getEmail(), subject, template, attributes);
        return "User register successfully, Please check email to active account";
    }

    @Override
    public String activeCode(String code) {
        User user = userRepository.findByActivationCode(code);

        if (user == null) {
            throw new ApiRequestException("Activation code not found", HttpStatus.NOT_FOUND);
        }
        user.setActive(true);
        user.setActivationCode(null);
        userRepository.save(user);
        return "Active account successfull";
    }
}
