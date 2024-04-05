package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.ReportType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="report-types")

public interface ReportTypeRepository extends JpaRepository<ReportType, Long> {}
