package com.fptgang.auctionhouse.service;

import com.fptgang.auctionhouse.model.Orchid;
import com.fptgang.auctionhouse.model.Role;
import com.fptgang.auctionhouse.model.User;
import com.fptgang.auctionhouse.repository.OrchidRepository;
import com.fptgang.auctionhouse.repository.RoleRepository;
import com.fptgang.auctionhouse.repository.UserRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private UserRepository userRepository;
  private RoleRepository roleRepository;
  private OrchidRepository orchidRepository;

  public UserService(
    UserRepository userRepository,
    RoleRepository roleRepository,
    OrchidRepository orchidRepository
  ) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.orchidRepository = orchidRepository;
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public List<Orchid> test() {
    return orchidRepository.findAll();
  }

  @SuppressWarnings("null")
  public User createUser(User user) {
    User savedUser = userRepository.save(user);
    return savedUser;
  }
}
