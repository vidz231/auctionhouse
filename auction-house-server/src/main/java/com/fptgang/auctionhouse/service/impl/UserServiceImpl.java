package com.fptgang.auctionhouse.service.impl;

import com.fptgang.auctionhouse.dto.user.CreateUserDTO;
import com.fptgang.auctionhouse.dto.user.UpdateUserDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;
import com.fptgang.auctionhouse.exception.InvalidInputException;
import com.fptgang.auctionhouse.exception.ResourceNotFoundException;
import com.fptgang.auctionhouse.model.User;
import com.fptgang.auctionhouse.repository.AuthRepository;
import com.fptgang.auctionhouse.repository.RoleRepository;
import com.fptgang.auctionhouse.repository.UserRepository;
import com.fptgang.auctionhouse.service.UserService;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  private UserRepository userRepository;
  private AuthRepository authRepository;
  private RoleRepository roleRepository;

  public UserServiceImpl(
    UserRepository userRepository,
    AuthRepository authRepository,
    RoleRepository roleRepository
  ) {
    this.userRepository = userRepository;
    this.authRepository = authRepository;
    this.roleRepository = roleRepository;
  }

  public User mapToEntity(CreateUserDTO userDTO) {
    Date dob = new Date(System.currentTimeMillis());
    try {
      dob =
        new Date(
          new SimpleDateFormat("dd/MM/yyyy").parse(userDTO.getDob()).getTime()
        );
    } catch (Exception e) {
      throw new InvalidInputException("Invalid date format");
    }
    User user = User
      .builder()
      .name(userDTO.getName())
      .email(userDTO.getEmail())
      .password(userDTO.getPassword())
      .phoneNumber(userDTO.getPhoneNumber())
      .address(userDTO.getAddress())
      .dob(dob)
      .gender(userDTO.getGender())
      .avatarUrl(userDTO.getAvatarUrl())
      .build();
    return user;
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
  public UserDTO createUser(CreateUserDTO userDTO) {
    User user = null;
    if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
      return null;
    }
    user = mapToEntity(userDTO);
    user.setAuth(authRepository.findById((long) 3).get());
    user.setRole(roleRepository.findById((long) userDTO.getRoleId()).get());
    user.setIsBanned(false);
    User createdUser = userRepository.save(user);
    return mapToDTO(createdUser);
  }

  @Override
  @SuppressWarnings("null")
  public UserDTO getUser(Long id) {
    User user = userRepository
      .findById(id)
      .orElseThrow(() ->
        new ResourceNotFoundException("User", "id", Long.toString(id))
      );
    return mapToDTO(user);
  }

  @Override
  @SuppressWarnings("null")
  public UserDTO updateUser(Long id, UpdateUserDTO userDTO) {
    Date dob = new Date(System.currentTimeMillis());
    try {
      dob =
        new Date(
          new SimpleDateFormat("dd/MM/yyyy").parse(userDTO.getDob()).getTime()
        );
    } catch (Exception e) {
      throw new InvalidInputException("Invalid date format");
    }
    User user = userRepository
      .findById(id)
      .orElseThrow(() ->
        new ResourceNotFoundException("User", "id", Long.toString(id))
      );
    user.setName(userDTO.getName());
    user.setEmail(userDTO.getEmail());
    user.setPhoneNumber(userDTO.getPhoneNumber());
    user.setAddress(userDTO.getAddress());
    user.setDob(dob);
    user.setGender(userDTO.getGender());
    user.setAvatarUrl(userDTO.getAvatarUrl());
    User updatedUser = userRepository.save(user);
    return mapToDTO(updatedUser);
  }

  @Override
  @SuppressWarnings("null")
  public UserDTO banUser(Long id) {
    User user = userRepository
      .findById(id)
      .orElseThrow(() ->
        new ResourceNotFoundException("User", "id", Long.toString(id))
      );
    user.setIsBanned(true);
    return mapToDTO(userRepository.save(user));
  }

  @Override
  @SuppressWarnings("null")
  public UserDTO deleteUser(Long id) {
    User user = userRepository
      .findById(id)
      .orElseThrow(() ->
        new ResourceNotFoundException("User", "id", Long.toString(id))
      );
    userRepository.delete(user);
    return mapToDTO(user);
  }

  @Override
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  @Override
  public List<User> getByUserName(String name) {
    return userRepository.findByNameContaining(name);
  }
}
