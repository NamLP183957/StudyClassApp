package com.example.studyclassapp.security.jwt;

import com.example.studyclassapp.exception.JwtAuthenticationException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JWTFilter extends GenericFilterBean {
    private final JWTProvider jwtProvider;

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {
        String token = jwtProvider.rosolveToken((HttpServletRequest) servletRequest);

        try {
            if (token != null && jwtProvider.validateToken(token)) {
                Authentication authentication = jwtProvider.getAuthentication(token);

                if (authentication != null) {
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        } catch (JwtAuthenticationException exception) {
            SecurityContextHolder.clearContext();
            ((HttpServletResponse) servletResponse).sendError(exception.getHttpStatus().value());
            throw new JwtAuthenticationException("This token is invalid or expire");
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
