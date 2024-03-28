package com.fptgang.auctionhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptgang.auctionhouse.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
