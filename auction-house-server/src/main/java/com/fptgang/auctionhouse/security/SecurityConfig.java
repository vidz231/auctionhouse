package com.fptgang.auctionhouse.security;

import java.util.Arrays;
import java.util.List;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  private CustomUserDetailService userDetailService;
  private JWTAuthEntryPoint jwtAuthEntryPoint;

  public SecurityConfig(
    CustomUserDetailService userDetailService,
    JWTAuthEntryPoint jwtAuthEntryPoint
  ) {
    this.userDetailService = userDetailService;
    this.jwtAuthEntryPoint = jwtAuthEntryPoint;
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .cors(Customizer.withDefaults())
      .csrf(authorize -> authorize.disable())
      .exceptionHandling(authorize ->
        authorize.authenticationEntryPoint(jwtAuthEntryPoint)
      )
      .sessionManagement(authorize ->
        authorize.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      )
      .authorizeHttpRequests(authorize ->
        authorize
          // .requestMatchers("/*")
          // .authenticated()
          // .requestMatchers("/users/*")
          // .permitAll()
          // .requestMatchers("/auth/*")
          // .permitAll()
          // .requestMatchers("/test/*")
          .anyRequest()
          .permitAll()
      // .authenticated()
      )
      .httpBasic(Customizer.withDefaults())
      .formLogin(Customizer.withDefaults());
    http.addFilterBefore(
      jwtAuthenticationFilter(),
      UsernamePasswordAuthenticationFilter.class
    );
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

  @Bean
  public JWTAuthenticationFilter jwtAuthenticationFilter() {
    return new JWTAuthenticationFilter();
  }
}
