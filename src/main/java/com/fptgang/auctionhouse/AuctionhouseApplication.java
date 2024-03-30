package com.fptgang.auctionhouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class AuctionhouseApplication {

  public static void main(String[] args) {
    SpringApplication.run(AuctionhouseApplication.class, args);
  }

  @GetMapping("/")
  public String home() {
    return "Welcome to Auction House";
  }
}
