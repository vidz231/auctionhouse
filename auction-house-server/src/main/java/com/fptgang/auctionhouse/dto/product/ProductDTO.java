package com.fptgang.auctionhouse.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ProductDTO {

  private String name;
  private Double price;
  private Long orchidId;
  private String description;
  private Long madeIn;
  private Integer remain;
  private Boolean isAuctioned;
}
