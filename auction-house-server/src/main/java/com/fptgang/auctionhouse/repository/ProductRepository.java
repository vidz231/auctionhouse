package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Product;
import com.fptgang.auctionhouse.projection.ProductProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
@RepositoryRestResource(path="products",excerptProjection = ProductProjection.class)

public interface ProductRepository extends JpaRepository<Product, Long> {}
