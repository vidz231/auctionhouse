package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {}
