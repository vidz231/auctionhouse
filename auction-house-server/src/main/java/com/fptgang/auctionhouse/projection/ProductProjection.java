package com.fptgang.auctionhouse.projection;

import com.fptgang.auctionhouse.model.Country;
import com.fptgang.auctionhouse.model.Orchid;
import com.fptgang.auctionhouse.model.Product;
import com.fptgang.auctionhouse.model.User;
import java.sql.Date;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "getAllValues", types = Product.class)
public interface ProductProjection {
  Long getId();

  User getOwner();

  String getName();

  Double getPrice();

  Orchid getOrchid();

  String getDescription();
  Country getMadeIn();

  Integer getRemain();

  Date getCreatedAt();

  Date getUpdatedAt();
}
