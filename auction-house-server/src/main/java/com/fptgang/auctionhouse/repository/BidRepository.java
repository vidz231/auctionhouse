package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidRepository extends JpaRepository<Bid, Long> {}
