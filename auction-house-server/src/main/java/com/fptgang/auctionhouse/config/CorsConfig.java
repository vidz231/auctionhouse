package com.fptgang.auctionhouse.config;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class CorsConfig implements RepositoryRestConfigurer {

  // @Bean
  // public WebMvcConfigurer webMvcConfigurer() {
  //   return new WebMvcConfigurer() {
  //     @Override
  //     public void addCorsMappings(CorsRegistry registry) {
  //       registry.addMapping("/**");
  //     }
  //   };
  // }

  @Override
  public void configureRepositoryRestConfiguration(
    RepositoryRestConfiguration config,
    CorsRegistry cors
  ) {
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
      .allowCredentials(false)
      .maxAge(3600);
  }
}
