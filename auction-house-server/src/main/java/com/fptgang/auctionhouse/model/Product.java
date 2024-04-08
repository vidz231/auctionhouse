package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.sql.Date;
import java.util.List;
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
  @JsonIncludeProperties({ "id", "name" })
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

  @OneToMany
  @JoinColumn(name = "product_id")
  private List<Image> image;

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
