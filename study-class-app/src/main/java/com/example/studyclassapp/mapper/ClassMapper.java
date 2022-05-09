package com.example.studyclassapp.mapper;

import com.example.studyclassapp.dto.clas.ClassRequest;
import com.example.studyclassapp.dto.clas.ClassResponse;
import com.example.studyclassapp.dto.pagination.PaginationRequest;
import com.example.studyclassapp.dto.pagination.PaginationResponse;
import com.example.studyclassapp.modal.Class;
import com.example.studyclassapp.modal.ClassScope;
import com.example.studyclassapp.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ClassMapper {
    private final ModelMapper modelMapper;
    private final ClassService classService;

    public Class convertToEntity(ClassRequest classRequest) {
        Class clas = modelMapper.map(classRequest, Class.class);
        clas.setScope(ClassScope.valueOf(classRequest.getScope()));
        return clas;
    }

    public ClassResponse convertToDtoResponse(Class clas) {
        return modelMapper.map(clas, ClassResponse.class);
    }

    List<ClassResponse> convertToListDtoResposne(List<Class> classList) {
        return classList.stream()
                .map(this::convertToDtoResponse)
                .collect(Collectors.toList());
    }

    public ClassResponse addClass(String email, ClassRequest classRequest) {
        return convertToDtoResponse(classService.addClass(email, convertToEntity(classRequest)));
    }

    public ClassResponse getClassById(String email, Long id) {
        return convertToDtoResponse(classService.getClassById(email, id));
    }

    PaginationResponse convertToPaginationResponse(Page<Class> classPage){
        PaginationResponse paginationResponse = new PaginationResponse();
        List<Class> classList = classPage.getContent();
        paginationResponse.setContent(convertToListDtoResposne(classList));
        paginationResponse.setTotalPages(classPage.getTotalPages());
        return paginationResponse;
    }

    public PaginationResponse getClassPagination(String email, PaginationRequest paginationRequest) {
        return convertToPaginationResponse(classService.getListClass(email, paginationRequest));
    }

    public PaginationResponse getListClassByKeyAndScope(String email, String key, String scope, PaginationRequest paginationRequest) {
        return convertToPaginationResponse(classService.getListClassByKeyAndScope(email, key, scope, paginationRequest));
    }

    public ClassResponse joinClassByCode(String email, String code) {
        return convertToDtoResponse(classService.joinClassByCode(email, code));
    }
}
