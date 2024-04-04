package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionProvider extends JpaRepository<Transaction, Long> {}
