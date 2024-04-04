package com.fptgang.auctionhouse.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.NoOpAuthenticationEntryPoint;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  private CustomerUserDetailService userDetailService;

  public SecurityConfig(CustomerUserDetailService userDetailService) {
    this.userDetailService = userDetailService;
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .csrf(authorize -> authorize.disable())
      .authorizeHttpRequests(authorize ->
        authorize
          .requestMatchers("/users/search")
          .authenticated()
          .requestMatchers("/users/*")
          .permitAll()
          .requestMatchers("/auth/*")
          .permitAll()
          .anyRequest()
          .authenticated()
      )
      .httpBasic(Customizer.withDefaults())
      .formLogin(Customizer.withDefaults());
    return http.build();
  }

  @Bean
  public AuthenticationManager authenticationManager(
    AuthenticationConfiguration authenticationConfiguration
  ) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return new TestPasswordEncoder();
  }
}
