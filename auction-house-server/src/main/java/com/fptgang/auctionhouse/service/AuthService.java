package com.fptgang.auctionhouse.service;

import com.fptgang.auctionhouse.dto.authentication.LoginDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;

public interface AuthService {
  public UserDTO login(LoginDTO loginDTO);

  public UserDTO logout();
}
