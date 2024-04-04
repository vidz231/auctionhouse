package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionTypeRepository
  extends JpaRepository<TransactionType, Long> {}
