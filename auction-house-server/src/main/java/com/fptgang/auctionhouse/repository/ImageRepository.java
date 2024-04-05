package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Image;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="images")

public interface ImageRepository extends JpaRepository<Image, Long> {
  List<Image> findByProductId(Long productId);
}
