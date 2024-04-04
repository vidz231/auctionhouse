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
@Table(name = "Transaction")
public class Transaction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "user_id")
  @JsonIncludeProperties({ "id", "name" })
  private User user;

  @Column(name = "money")
  private Double money;

  @ManyToOne
  @JoinColumn(name = "transaction_type_id")
  @JsonIncludeProperties({ "name" })
  private TransactionType transactionType;

  @ManyToOne
  @JoinColumn(name = "transaction_provider_id")
  @JsonIncludeProperties({ "name" })
  private TransactionProvider transactionProvider;

  @Column(name = "description")
  private String description;

  @Column(name = "created_at")
  @CreationTimestamp
  private Date createdAt;
}
