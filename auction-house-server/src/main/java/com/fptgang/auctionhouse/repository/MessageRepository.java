package com.fptgang.auctionhouse.repository;

import com.fptgang.auctionhouse.model.Message;
import com.fptgang.auctionhouse.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "messages")
public interface MessageRepository extends JpaRepository<Message, Long> {
  List<Message> findByReceiverId(Long id);
  List<Message> findBySenderId(Long id);

  @Query(
    "SELECT DISTINCT m.sender FROM Message m WHERE m.receiver.id = :id " +
    "UNION " +
    "SELECT DISTINCT m.receiver FROM Message m WHERE m.sender.id = :id"
  )
  List<User> findUsersContactedWith(@Param("id") Long id);

  @Query(
    "SELECT m FROM Message m " +
    "WHERE (m.sender.id = :userId1 AND m.receiver.id = :userId2) " +
    "   OR (m.sender.id = :userId2 AND m.receiver.id = :userId1) " +
    "ORDER BY m.createdAt"
  )
  List<Message> findMessagesBetweenUsers(
    @Param("userId1") Long userId1,
    @Param("userId2") Long userId2
  );
}
