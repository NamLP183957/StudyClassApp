package com.example.studyclassapp.configuration;

import com.example.studyclassapp.dto.question.MultiChoiceQuestionRequest;
import com.example.studyclassapp.dto.question.OneChoiceQuestionRequest;
import com.example.studyclassapp.dto.question.QuestionRequest;
import com.example.studyclassapp.dto.question.TypeQuestionRequest;
import com.example.studyclassapp.modal.question.MultiChoiceQuestion;
import com.example.studyclassapp.modal.question.OneChoiceQuestion;
import com.example.studyclassapp.modal.question.Question;
import com.example.studyclassapp.modal.question.TypeQuestion;
import org.modelmapper.Converter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.function.Supplier;

@Configuration
public class ApplicationConfiguration {

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

    @Bean
    public ModelMapper getModelMapper() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        mapper.typeMap(MultiChoiceQuestionRequest.class, Question.class)
                .setConverter(converterWithDestinationSupplier(MultiChoiceQuestion::new));
        mapper.typeMap(OneChoiceQuestionRequest.class, Question.class)
                .setConverter(converterWithDestinationSupplier(OneChoiceQuestion::new));
        mapper.typeMap(TypeQuestionRequest.class, Question.class)
                .setConverter(converterWithDestinationSupplier(TypeQuestion::new));
        return mapper;
    }

    private <S, D> Converter<S, D> converterWithDestinationSupplier(Supplier<? extends  D> supplier) {
        return ctx -> ctx.getMappingEngine().map(ctx.create(ctx.getSource(), supplier.get()));
    }
}
