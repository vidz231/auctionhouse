package com.fptgang.auctionhouse.config;

import com.fptgang.auctionhouse.model.Product;
import com.fptgang.auctionhouse.model.User;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class RestConfig implements RepositoryRestConfigurer {

  @Override
  public void configureRepositoryRestConfiguration(
    RepositoryRestConfiguration config,
    CorsRegistry cors
  ) {
    config.exposeIdsFor(Product.class);
    config.exposeIdsFor(User.class);
    config.exposeRepositoryMethodsByDefault();
    cors
      .addMapping("/**")
      .allowedOrigins("http://localhost:5173")
      .allowedMethods(
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "OPTIONS",
        "HEAD",
        "TRACE",
        "CONNECT"
      )
      .allowedHeaders("*")
      .exposedHeaders("*")
      .allowCredentials(false);
  }
}
