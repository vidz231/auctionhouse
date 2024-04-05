package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="order-status")

public interface OrderStatusRepository
  extends JpaRepository<OrderStatus, Long> {}
