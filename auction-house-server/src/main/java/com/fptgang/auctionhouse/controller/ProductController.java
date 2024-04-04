package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.service.impl.ProductServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

  private ProductServiceImpl productService;

  public ProductController(ProductServiceImpl productService) {
    this.productService = productService;
  }

  @GetMapping("/all")
  public ResponseEntity<Object> getAllProducts() {
    return ResponseEntity.ok(productService.getAllProducts());
  }
}
