package com.fptgang.auctionhouse.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Auction")
public class Auction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long ID;

  private Long productID;
  private long staffID;
  private Date startTime;
  private Date endTime;
  private long startPrice;
  private long currentPrice;
  private long endPrice;
}
