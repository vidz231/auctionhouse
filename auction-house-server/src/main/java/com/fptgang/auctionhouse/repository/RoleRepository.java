package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="roles")

public interface RoleRepository extends JpaRepository<Role, Long> {}
