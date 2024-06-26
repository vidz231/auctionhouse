package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Auction")
public class Auction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "product_id")
  @JsonIncludeProperties({ "id", "name" })
  private Product product;

  @ManyToOne
  @JoinColumn(name = "employee_id")
  @JsonIncludeProperties({ "id", "name" })
  private User employee;

  @ManyToOne
  @JoinColumn(name = "winner_id")
  @JsonIncludeProperties({ "id", "name" })
  private User winner;

  @Column(name = "amount")
  private Integer amount;

  // @Column(name = "start_price")
  private Double startPrice;

  // @Column(name = "step_price")
  private Double stepPrice;

  // @Column(name = "current_price")
  private Double currentPrice;

  // @Column(name = "start_time")
  private Date startTime;

  // @Column(name = "end_time")
  private Date endTime;

  @Column(name = "created_at")
  @CreationTimestamp
  private Date createdAt;
}
