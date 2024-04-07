package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path="auctions")
public interface AuctionRepository extends JpaRepository<Auction, Long> {}
