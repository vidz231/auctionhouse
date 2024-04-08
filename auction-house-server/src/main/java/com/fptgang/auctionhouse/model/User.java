package com.fptgang.auctionhouse.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

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

    @Column(name = "avatar_url",
//    columnDefinition = "varchar(MAX) default 'https://robohash.org/eumtemporaest.png?size=50x50&set=set1'"
            columnDefinition = "varchar(MAX) "
    )
    private String avatarUrl = "https://robohash.org/eumtemporaest.png?size=50x50&set=set1";

    @Column(name = "is_banned", columnDefinition = "BIT DEFAULT 0")
    private Boolean isBanned = false;

    @JsonIgnore
    @Column(name = "created_at")
    @CreationTimestamp
    private Date createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private Date updatedAt;

    @ManyToOne(cascade=CascadeType.REMOVE)
    @JoinColumn(name = "auth_type")
    private Auth auth;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "role_id")
    private Role role;
}
