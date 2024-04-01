package com.fptgang.auctionhouse.service;

import com.fptgang.auctionhouse.dto.user.CreateUserDTO;
import com.fptgang.auctionhouse.dto.user.UpdateUserDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;
import com.fptgang.auctionhouse.model.User;
import java.util.List;

public interface UserService {
  public UserDTO createUser(CreateUserDTO userDto);

  public UserDTO getUser(Long id);

  public UserDTO updateUser(Long id, UpdateUserDTO userDto);

  public UserDTO deleteUser(Long id);

  public UserDTO banUser(Long id);

  public List<User> getAllUsers();

  public List<User> getByUserName(String name);
}
