package com.fptgang.auctionhouse.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class FavoriteKey implements Serializable {

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "product_id")
  private Long productId;
}
