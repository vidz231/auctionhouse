package com.fptgang.auctionhouse.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class OrderDetailKey implements Serializable {

  @Column(name = "id")
  private Long orderId;

  @Column(name = "product_id")
  private Long productId;
}
