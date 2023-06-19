package com.ProFIesta.entity;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id   
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String userName;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String password;

    // Getters and setters, constructors, and other attributes...
}

