package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Image;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
  List<Image> findByProductId(Long productId);
}
