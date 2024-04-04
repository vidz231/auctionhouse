package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.dto.authentication.LoginDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;
import com.fptgang.auctionhouse.exception.ErrorResponse;
import com.fptgang.auctionhouse.service.AuthService;
import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private AuthService authService;
  private AuthenticationManager authenticationManager;

  public AuthController(
    AuthService authService,
    AuthenticationManager authenticationManager
  ) {
    this.authService = authService;
    this.authenticationManager = authenticationManager;
  }

  @PostMapping("/login")
  public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO) {
    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(
        loginDTO.getEmail(),
        loginDTO.getPassword()
      )
    );
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return ResponseEntity.ok("Sign in success!");
  }
}
