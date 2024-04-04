package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Message")
public class Message {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "message")
  private String message;

  @ManyToOne
  @JoinColumn(name = "sender_id")
  @JsonIncludeProperties({ "id", "name" })
  private User sender;

  @ManyToOne
  @JoinColumn(name = "receiver_id")
  @JsonIncludeProperties({ "id", "name" })
  private User receiver;

  @Column(name = "created_at")
  @CreationTimestamp
  private Date createdAt;
}
