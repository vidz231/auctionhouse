package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="countries")

public interface CountryRepository extends JpaRepository<Country, Long> {}
