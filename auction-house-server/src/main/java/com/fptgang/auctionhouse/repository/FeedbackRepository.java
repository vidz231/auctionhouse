package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="feedbacks")

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {}
