package com.example.studyclassapp.dto.pagination;

import lombok.Data;

import java.util.List;

@Data
public class PaginationResponse {
    private Object content;
    private Integer totalPages;
}
