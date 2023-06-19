package com.ProFIesta.entity;
import javax.persistence.*;

public class Establishment {
    
    @Id    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String password;

    @Column(nullable = false)
    private String cover;

    @Column(nullable = true)
    private String dressCode;
    
    @Column(nullable = true)
    private String event;

    @Column(nullable = true)
    private String music;

    @Column(nullable = true)
    private int affluency;

    @Column(nullable = true);
    private int affluencyProm;
}
