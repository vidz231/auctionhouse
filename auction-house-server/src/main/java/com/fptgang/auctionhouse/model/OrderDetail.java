package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.Column;
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
@Table(name = "Order_Detail")
public class OrderDetail {

  @Id
  @ManyToOne
  @JoinColumn(name = "order_id")
  @JsonIncludeProperties({ "id" })
  private Order order;

  @Id
  @ManyToOne
  @JoinColumn(name = "product_id")
  @JsonIncludeProperties({ "id", "name" })
  private Product product;

  @Column(name = "price")
  private Double price;

  @Column(name = "amount")
  private Integer amount;

  @Column(name = "is_feedbacked")
  private Boolean isFeedbacked;
}
