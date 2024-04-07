package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="auths")

public interface AuthRepository extends JpaRepository<Auth, Long> {}
