package com.fptgang.auctionhouse.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {

  private String name;
  private String email;
  private String phoneNumber;
  private String address;
  private String dob;
  private String gender;
  private String avatarUrl;
}
