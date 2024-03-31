package com.fptgang.auctionhouse.service;

import com.fptgang.auctionhouse.dto.user.CreateUserDTO;
import com.fptgang.auctionhouse.dto.user.UpdateUserDTO;
import com.fptgang.auctionhouse.model.User;
import java.util.List;

public interface UserService {
  public User createUser(CreateUserDTO userDto);

  public User getUser(Long id);

  public User updateUser(Long id, UpdateUserDTO userDto);

  public User deleteUser(Long id);

  public User banUser(Long id);

  public List<User> getAllUsers();

  public List<User> getByUserName(String name);
}
