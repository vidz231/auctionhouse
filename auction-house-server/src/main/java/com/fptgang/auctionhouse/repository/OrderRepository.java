package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {}
