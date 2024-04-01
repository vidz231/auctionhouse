package com.fptgang.auctionhouse.service;

import com.fptgang.auctionhouse.model.Product;
import java.util.List;

public interface ProductService {
  public Product createProduct(Product product);

  public Product getProduct(Long id);

  public Product updateProduct(Long id, Product product);

  public Product deleteProduct(Long id);

  public List<Product> getAllProducts();

  public List<Product> getByProductName(String vendorName);
}
