package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.dto.authentication.AuthResponseDTO;
import com.fptgang.auctionhouse.dto.authentication.LoginDTO;
import com.fptgang.auctionhouse.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDTO loginDTO) {
    return ResponseEntity.ok(authService.login(loginDTO));
  }
}
