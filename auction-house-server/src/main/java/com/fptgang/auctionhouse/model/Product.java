package com.fptgang.auctionhouse.model;

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
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Product")
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "owner_id")
  private User owner;

  @Column(name = "name")
  private String name;

  @Column(name = "price")
  private Double price;

  @ManyToOne
  @JoinColumn(name = "orchid_type")
  private Orchid orchid;

  @Column(name = "description")
  private String description;

  @ManyToOne
  @JoinColumn(name = "made_in")
  private Country madeIn;

  @Column(name = "remain")
  private Integer remain;

  @Column(name = "is_auctioned")
  private Boolean isAuctioned;

  @Column(name = "is_censored")
  private Boolean isCensored;

  @Column(name = "is_deleted")
  private Boolean isDeleted;

  @Column(name = "created_at")
  @CreationTimestamp
  private Date createdAt;

  @Column(name = "updated_at")
  @UpdateTimestamp
  private Date updatedAt;
}
