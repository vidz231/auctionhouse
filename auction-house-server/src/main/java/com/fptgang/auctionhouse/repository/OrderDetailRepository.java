package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository
  extends JpaRepository<OrderDetail, Long> {}
