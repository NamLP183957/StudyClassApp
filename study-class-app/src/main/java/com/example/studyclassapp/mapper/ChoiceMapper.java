package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.choice.ChoiceRequest;
import com.example.studyclassapp.modal.Choice;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ChoiceMapper {
    private final ModelMapper modelMapper;

    public Choice convertToEntity(ChoiceRequest choiceRequest) {
        return modelMapper.map(choiceRequest, Choice.class);
    }

    public List<Choice> convertToListEntity(List<ChoiceRequest> choiceRequests) {
        return choiceRequests.stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
