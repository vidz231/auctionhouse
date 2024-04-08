package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("product")
public class ProductController {

  private ProductRepository productRepository;

  public ProductController(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @GetMapping("1")
  public ResponseEntity test() {
    return ResponseEntity.ok(productRepository.findById((long) 1));
  }
}
