package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="notifications")

public interface NotificationRepository
  extends JpaRepository<Notification, Long> {}
