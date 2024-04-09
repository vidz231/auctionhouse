package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "transaction-providers")
public interface TransactionProviderRepository
  extends JpaRepository<Transaction, Long> {}
