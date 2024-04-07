package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="transaction-types")

public interface TransactionTypeRepository
  extends JpaRepository<TransactionType, Long> {}
