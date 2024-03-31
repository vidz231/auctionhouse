package com.fptgang.auctionhouse.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserDTO {

  private String name;
  private String email;
  private String password;
  private String confirmPassword;
  private String phoneNumber;
  private String address;
  private String dob;
  private String gender;
  private String avatarUrl;
  private Integer roleId;
}
