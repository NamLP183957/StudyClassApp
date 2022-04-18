package com.example.studyclassapp.dto.pagination;

import lombok.Data;

@Data
public class PaginationRequest {
    private Integer page;
    private Integer itemsPerPage;
}
