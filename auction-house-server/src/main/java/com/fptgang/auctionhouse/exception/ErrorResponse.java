package com.fptgang.auctionhouse.exception;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorResponse {

  private String message;
  private Date timestamp;

  public ErrorResponse(String message, Date timestamp) {
    this.message = message;
    this.timestamp = timestamp;
  }
}
