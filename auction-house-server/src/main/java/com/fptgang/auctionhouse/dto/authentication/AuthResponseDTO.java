package com.fptgang.auctionhouse.dto.authentication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AuthResponseDTO {

  private String accessToken;
  private Long userId;
}
