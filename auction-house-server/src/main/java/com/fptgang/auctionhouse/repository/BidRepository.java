package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="bids")

public interface BidRepository extends JpaRepository<Bid, Long> {}
