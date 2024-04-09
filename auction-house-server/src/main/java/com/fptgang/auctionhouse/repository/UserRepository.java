package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "users")
public interface UserRepository extends JpaRepository<User, Long> {
  List<User> findByNameContaining(String name);
  Optional<User> findByEmail(String email);

}
