package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {}
