package com.fptgang.auctionhouse.service;

import com.fptgang.auctionhouse.dto.authentication.AuthResponseDTO;
import com.fptgang.auctionhouse.dto.authentication.LoginDTO;

public interface AuthService {
  public AuthResponseDTO login(LoginDTO loginDTO);

  public AuthResponseDTO logout();
}
