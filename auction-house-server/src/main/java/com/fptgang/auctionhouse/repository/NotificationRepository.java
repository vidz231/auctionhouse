package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository
  extends JpaRepository<Notification, Long> {}
