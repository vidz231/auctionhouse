package com.fptgang.auctionhouse.service.impl;

import com.fptgang.auctionhouse.model.Product;
import com.fptgang.auctionhouse.service.ProductService;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

  @Override
  public Product createProduct(Product product) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException(
      "Unimplemented method 'createProduct'"
    );
  }

  @Override
  public Product getProduct(Long id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException(
      "Unimplemented method 'getProduct'"
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
