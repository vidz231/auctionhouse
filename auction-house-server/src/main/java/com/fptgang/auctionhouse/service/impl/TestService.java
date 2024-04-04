package com.fptgang.auctionhouse.service.impl;

import com.fptgang.auctionhouse.exception.ResourceNotFoundException;
import com.fptgang.auctionhouse.model.Auction;
import com.fptgang.auctionhouse.model.Image;
import com.fptgang.auctionhouse.model.Product;
import com.fptgang.auctionhouse.repository.AuctionRepository;
import com.fptgang.auctionhouse.repository.ImageRepository;
import com.fptgang.auctionhouse.repository.ProductRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TestService {

  private ProductRepository productRepository;
  private ImageRepository imageRepository;
  private AuctionRepository auctionRepository;

  public TestService(
    ProductRepository productRepository,
    ImageRepository imageRepository,
    AuctionRepository auctionRepository
  ) {
    this.productRepository = productRepository;
    this.imageRepository = imageRepository;
    this.auctionRepository = auctionRepository;
  }

  public List<Image> getImagesOfProduct(Long productId) {
    return imageRepository.findByProductId(productId);
    //   .orElseThrow(() ->
    //     new ResourceNotFoundException("Product", "id", productId.toString())
    //   );
  }

  public Auction getAuction(Long id) {
    return auctionRepository
      .findById(id)
      .orElseThrow(() ->
        new ResourceNotFoundException("Product", "id", id.toString())
      );
  }
}
