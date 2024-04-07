package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.OrderDetail;
import com.fptgang.auctionhouse.model.OrderDetailKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="order-details")

public interface OrderDetailRepository
  extends JpaRepository<OrderDetail, OrderDetailKey> {}
