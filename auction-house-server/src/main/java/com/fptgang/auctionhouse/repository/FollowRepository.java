package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Follow;
import com.fptgang.auctionhouse.model.FollowKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowRepository extends JpaRepository<Follow, FollowKey> {}
