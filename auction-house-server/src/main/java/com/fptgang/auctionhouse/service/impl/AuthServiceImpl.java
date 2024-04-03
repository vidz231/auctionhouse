package com.fptgang.auctionhouse.service.impl;

import com.fptgang.auctionhouse.dto.authentication.LoginDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;
import com.fptgang.auctionhouse.exception.ResourceNotFoundException;
import com.fptgang.auctionhouse.model.Role;
import com.fptgang.auctionhouse.model.User;
import com.fptgang.auctionhouse.repository.AuthRepository;
import com.fptgang.auctionhouse.repository.RoleRepository;
import com.fptgang.auctionhouse.repository.UserRepository;
import com.fptgang.auctionhouse.service.AuthService;
import java.text.SimpleDateFormat;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

  private UserRepository userRepository;
  private RoleRepository roleRepository;
  private AuthRepository authRepository;

  public AuthServiceImpl(
    UserRepository userRepository,
    RoleRepository roleRepository,
    AuthRepository authRepository
  ) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.authRepository = authRepository;
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
  public UserDTO login(LoginDTO loginDTO) {
    User user = userRepository.findByEmail(loginDTO.getEmail());
    if (user == null) {
      throw new ResourceNotFoundException("User", "email", loginDTO.getEmail());
    }
    return mapToDTO(user);
  }

  @Override
  public UserDTO logout() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'logout'");
  }
}
