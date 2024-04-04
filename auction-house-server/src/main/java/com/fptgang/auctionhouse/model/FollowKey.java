package com.fptgang.auctionhouse.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class FollowKey implements Serializable {

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "following_id")
  private Long followingId;
}
