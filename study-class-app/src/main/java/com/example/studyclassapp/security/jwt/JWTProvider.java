package com.example.studyclassapp.security.jwt;

import io.jsonwebtoken.Jwts;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface JWTProvider {

    String createToken(String username, String role);

    boolean validateToken(String token);

    Authentication getAuthentication(String token);

    String rosolveToken(HttpServletRequest request);

    String getUseranme(String token);
}
