package com.fptgang.auctionhouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fptgang.auctionhouse.model.User;
import com.fptgang.auctionhouse.repository.UserRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        User savedUser = userRepository.save(user);
        if (savedUser == null) {
            throw new RuntimeException("Failed to create user");
        }
        return savedUser;
    }

}
