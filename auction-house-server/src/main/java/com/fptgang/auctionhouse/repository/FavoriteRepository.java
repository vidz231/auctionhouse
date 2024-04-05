package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Favorite;
import com.fptgang.auctionhouse.model.FavoriteKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteRepository
  extends JpaRepository<Favorite, FavoriteKey> {}
