package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderStatusRepository
  extends JpaRepository<OrderStatus, Long> {}
