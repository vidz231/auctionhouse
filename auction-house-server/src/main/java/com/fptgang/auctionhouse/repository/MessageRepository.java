package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="messages")

public interface MessageRepository extends JpaRepository<Message, Long> {}
