package com.fptgang.auctionhouse.service.impl;

import com.fptgang.auctionhouse.exception.ResourceNotFoundException;
import com.fptgang.auctionhouse.model.Product;
import com.fptgang.auctionhouse.repository.ProductRepository;
import com.fptgang.auctionhouse.service.ProductService;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

  private ProductRepository productRepository;

  public ProductServiceImpl(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @Override
  public Product createProduct(Product product) {
    return productRepository.save(product);
  }

  @Override
  public Product getProduct(Long id) {
    return productRepository
      .findById(id)
      .orElseThrow(() ->
        new ResourceNotFoundException("Product", "id", id.toString())
      );
  }

  @Override
  public Product updateProduct(Long id, Product product) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException(
      "Unimplemented method 'updateProduct'"
    );
  }

  @Override
  public Product deleteProduct(Long id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException(
      "Unimplemented method 'deleteProduct'"
    );
  }

  @Override
  public List<Product> getAllProducts() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException(
      "Unimplemented method 'getAllProducts'"
    );
  }

  @Override
  public List<Product> getByProductName(String vendorName) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException(
      "Unimplemented method 'getByProductName'"
    );
  }
}
