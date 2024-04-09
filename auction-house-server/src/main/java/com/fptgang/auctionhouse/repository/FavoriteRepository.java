package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Favorite;
import com.fptgang.auctionhouse.model.FavoriteKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="favorites")

public interface FavoriteRepository
  extends JpaRepository<Favorite, FavoriteKey> {}
