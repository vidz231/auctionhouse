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
@Table(name = "Report")
public class Report {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "user_id")
  @JsonIncludeProperties({ "id", "name" })
  private User user;

  @ManyToOne
  @JoinColumn(name = "product_id")
  @JsonIncludeProperties({ "id", "name" })
  private Product product;

  @ManyToOne
  @JoinColumn(name = "report_type_id")
  @JsonIncludeProperties({ "name" })
  private ReportType reportType;

  @Column(name = "description")
  private String description;

  @Column(name = "is_resolved")
  private Boolean isResolved;

  @Column(name = "resolve_message")
  private String resolveMessage;

  @Column(name = "created_at")
  @CreationTimestamp
  private Date createdAt;
}
