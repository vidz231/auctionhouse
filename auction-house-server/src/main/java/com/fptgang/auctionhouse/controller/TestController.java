package com.fptgang.auctionhouse.controller;

import com.fptgang.auctionhouse.service.impl.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

  private TestService testService;

  public TestController(TestService testService) {
    this.testService = testService;
  }

  @GetMapping("/{id}")
  public ResponseEntity<Object> findById(@PathVariable Long id) {
    return ResponseEntity.ok(testService.getAuction(id));
  }
}
