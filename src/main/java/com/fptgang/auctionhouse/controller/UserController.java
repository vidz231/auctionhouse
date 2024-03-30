package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.model.User;
import com.fptgang.auctionhouse.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

  private UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/all")
  public ResponseEntity<Object> getAllUsers() {
    return ResponseEntity.ok(userService.getAllUsers());
  }

  @GetMapping("/test")
  public ResponseEntity<Object> test() {
    return ResponseEntity.ok(userService.test());
  }

  @PostMapping
  public User createUser(@RequestBody User user) {
    return userService.createUser(user);
  }
}
