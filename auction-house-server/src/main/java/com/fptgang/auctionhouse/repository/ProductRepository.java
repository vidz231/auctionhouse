package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
@RepositoryRestResource(path="products")

public interface ProductRepository extends JpaRepository<Product, Long> {}
