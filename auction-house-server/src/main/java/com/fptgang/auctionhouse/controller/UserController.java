package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.dto.user.CreateUserDTO;
import com.fptgang.auctionhouse.dto.user.UpdateUserDTO;
import com.fptgang.auctionhouse.dto.user.UserDTO;
import com.fptgang.auctionhouse.exception.ErrorResponse;
import com.fptgang.auctionhouse.service.UserService;
import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

  @PostMapping("/")
  public ResponseEntity<Object> create(@RequestBody CreateUserDTO userDTO) {
    UserDTO createdUser = userService.createUser(userDTO);
    if (createdUser == null) {
      return new ResponseEntity<>(
        new ErrorResponse("Register failed", new Date()),
        HttpStatus.BAD_REQUEST
      );
    }
    return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
  }

  @GetMapping("/")
  public ResponseEntity<Object> getAllUsers() {
    return ResponseEntity.ok(userService.getAllUsers());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Object> findById(@PathVariable Long id) {
    return ResponseEntity.ok(userService.getUser(id));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Object> update(
    @PathVariable Long id,
    @RequestBody UpdateUserDTO userDTO
  ) {
    UserDTO updatedUser = userService.updateUser(id, userDTO);
    return ResponseEntity.ok(updatedUser);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Object> delete(@PathVariable Long id) {
    UserDTO deletedUser = userService.deleteUser(id);
    return ResponseEntity.ok(deletedUser);
  }

  @PutMapping("/ban/{id}")
  public ResponseEntity<Object> ban(@PathVariable Long id) {
    UserDTO bannedUser = userService.banUser(id);
    return ResponseEntity.ok(bannedUser);
  }
}
