package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="transactions")

public interface TransactionRepository
  extends JpaRepository<Transaction, Long> {}
