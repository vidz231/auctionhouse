package com.fptgang.auctionhouse.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class UpdateProductDTO {

  private String name;
  private Double price;
  private Long orchidId;
  private String description;
  private Long madeIn;
  private Integer remain;
  private Boolean isAuctioned;
}
