package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionRepository extends JpaRepository<Auction, Long> {}
