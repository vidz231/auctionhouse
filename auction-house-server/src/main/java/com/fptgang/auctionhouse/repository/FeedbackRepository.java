package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {}
