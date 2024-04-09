package com.fptgang.auctionhouse.repository.projection;

import com.fptgang.auctionhouse.model.Message;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "senderExcerp", types = { Message.class })
public interface SenderExcerp {
  String getName();
}
