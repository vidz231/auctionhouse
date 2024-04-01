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
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "[User]")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "name")
  private String name;

  @Column(name = "email")
  private String email;

  @Column(name = "password")
  private String password;

  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "address")
  private String address;

  @Column(name = "dob")
  private Date dob;

  @Column(name = "gender")
  private String gender;

  @Column(
    name = "avatar_url",
    columnDefinition = "varchar(MAX) default 'https://robohash.org/eumtemporaest.png?size=50x50&set=set1'"
  )
  private String avatarUrl;

  @Column(name = "is_banned", columnDefinition = "BIT DEFAULT 0")
  private Boolean isBanned;

  @Column(name = "created_at")
  @CreationTimestamp
  private Date createdAt;

  @Column(name = "updated_at")
  @UpdateTimestamp
  private Date updatedAt;

  @ManyToOne
  @JoinColumn(name = "auth_type")
  private Auth auth;

  @ManyToOne
  @JoinColumn(name = "role_id")
  private Role role;
}
