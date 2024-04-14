package com.fptgang.auctionhouse.projection;

import com.fptgang.auctionhouse.model.Message;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "messageProjection", types = { Message.class })
public interface MessageProjection {
  String getName();
}
