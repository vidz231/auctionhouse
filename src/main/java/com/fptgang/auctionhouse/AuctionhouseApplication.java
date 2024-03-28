package com.fptgang.auctionhouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication()
public class AuctionhouseApplication {
	public static void main(String[] args) {
		SpringApplication.run(AuctionhouseApplication.class, args);
	}
}
