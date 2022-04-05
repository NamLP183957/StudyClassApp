package com.example.studyclassapp.security.jwt;


import com.example.studyclassapp.exception.JwtAuthenticationException;
import com.example.studyclassapp.modal.user.User;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.Base64;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JWTProviderImpl implements JWTProvider{
    @Qualifier("userDetailsServiceImpl") @Lazy
    private final UserDetailsService userDetailsService;

    @Value("${jwt.header}")
    private String jwtHeader;

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long validitySeconds;

    @PostConstruct
    public void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    @Override
    public String createToken(String username, String role) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("role", role);
        Date now = new Date();
        Date validity = new Date(now.getTime() + validitySeconds * 1000);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    @Override
    public boolean validateToken(String token) {
        try {
            Jws<Claims> claimsJwts = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return !claimsJwts.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException exception) {
            throw new JwtAuthenticationException("This token is invalid", HttpStatus.UNAUTHORIZED);
        }

    }

    @Override
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(getUseranme(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    @Override
    public String rosolveToken(HttpServletRequest request) {
        return request.getHeader(jwtHeader);
    }

    @Override
    public String getUseranme(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }
}
