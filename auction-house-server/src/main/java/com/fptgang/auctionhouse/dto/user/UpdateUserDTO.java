package com.fptgang.auctionhouse.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class UpdateUserDTO {

  private String name;
  private String email;
  private String phoneNumber;
  private String address;
  private String dob;
  private String gender;
  private String avatarUrl;
}
