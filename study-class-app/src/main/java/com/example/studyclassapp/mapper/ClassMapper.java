package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.clas.ClassRequest;
import com.example.studyclassapp.dto.clas.ClassResponse;
import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ClassMapper {
    private final ModelMapper modelMapper;
    private final ClassService classService;

    public Class convertToEntity(ClassRequest classRequest) {
        return modelMapper.map(classRequest, Class.class);
    }

    public ClassResponse convertToDtoResponse(Class clas) {
        return modelMapper.map(clas, ClassResponse.class);
    }

    public ClassResponse addClass(String email, ClassRequest classRequest) {
        return convertToDtoResponse(classService.addClass(email, convertToEntity(classRequest)));
    }

    public ClassResponse getClassById(String email, Long id) {
        return convertToDtoResponse(classService.getClassById(email, id));
    }
}
