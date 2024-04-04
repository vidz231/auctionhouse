package com.fptgang.auctionhouse.security;

import com.fptgang.auctionhouse.repository.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomerUserDetailService implements UserDetailsService {

  private UserRepository userRepository;

  public CustomerUserDetailService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username)
    throws UsernameNotFoundException {
    com.fptgang.auctionhouse.model.User user = userRepository
      .findByEmail(username)
      .orElseThrow(() -> new UsernameNotFoundException("Email not found"));
    List<SimpleGrantedAuthority> authorities = List
      .of(user.getRole())
      .stream()
      .map(role -> new SimpleGrantedAuthority(role.getName()))
      .collect(Collectors.toList());
    return new User(user.getEmail(), user.getPassword(), authorities);
  }
}
