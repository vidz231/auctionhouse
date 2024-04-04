package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Follow")
public class Follow {

  @EmbeddedId
  private FollowKey key;

  @MapsId("userId")
  @ManyToOne
  @JoinColumn(name = "user_id")
  @JsonIncludeProperties({ "id", "name" })
  private User user;

  @MapsId("followingId")
  @ManyToOne
  @JoinColumn(name = "following_id")
  @JsonIncludeProperties({ "id", "name" })
  private User following;
}
