package com.fptgang.auctionhouse.service.impl;

import com.fptgang.auctionhouse.dto.authentication.AuthResponseDTO;
import com.fptgang.auctionhouse.dto.authentication.LoginDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;
import com.fptgang.auctionhouse.model.Role;
import com.fptgang.auctionhouse.model.User;
import com.fptgang.auctionhouse.repository.AuthRepository;
import com.fptgang.auctionhouse.repository.RoleRepository;
import com.fptgang.auctionhouse.repository.UserRepository;
import com.fptgang.auctionhouse.security.JWTGenerator;
import com.fptgang.auctionhouse.service.AuthService;
import java.text.SimpleDateFormat;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

  private UserRepository userRepository;
  private RoleRepository roleRepository;
  private AuthRepository authRepository;
  private JWTGenerator jwtGenerator;
  private AuthenticationManager authenticationManager;

  public AuthServiceImpl(
    UserRepository userRepository,
    RoleRepository roleRepository,
    AuthRepository authRepository,
    JWTGenerator jwtGenerator,
    AuthenticationManager authenticationManager
  ) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.authRepository = authRepository;
    this.jwtGenerator = jwtGenerator;
    this.authenticationManager = authenticationManager;
  }

  public UserDTO mapToDTO(User user) {
    String dob = new SimpleDateFormat("dd/MM/yyyy").format(user.getDob());
    UserDTO userDTO = UserDTO
      .builder()
      .name(user.getName())
      .email(user.getEmail())
      .phoneNumber(user.getPhoneNumber())
      .address(user.getAddress())
      .dob(dob)
      .gender(user.getGender())
      .avatarUrl(user.getAvatarUrl())
      .build();
    return userDTO;
  }

  @Override
  public AuthResponseDTO login(LoginDTO loginDTO) {
    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(
        loginDTO.getEmail(),
        loginDTO.getPassword()
      )
    );
    SecurityContextHolder.getContext().setAuthentication(authentication);
    String token = jwtGenerator.generateToken(authentication);
    return new AuthResponseDTO(token);
  }

  @Override
  public AuthResponseDTO logout() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'logout'");
  }
}
