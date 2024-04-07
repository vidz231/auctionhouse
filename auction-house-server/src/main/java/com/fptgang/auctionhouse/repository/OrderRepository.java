package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="orders")

public interface OrderRepository extends JpaRepository<Order, Long> {}
