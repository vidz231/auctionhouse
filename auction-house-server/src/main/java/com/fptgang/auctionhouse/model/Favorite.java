package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "Favorite")
public class Favorite {

  @Id
  @ManyToOne
  @JoinColumn(name = "user_id")
  @JsonIncludeProperties({ "id", "name" })
  private User user;

  @Id
  @ManyToOne
  @JoinColumn(name = "product_id")
  @JsonIncludeProperties({ "id", "name" })
  private Product product;
}
