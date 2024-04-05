package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Orchid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="orchids")

public interface OrchidRepository extends JpaRepository<Orchid, Long> {}
