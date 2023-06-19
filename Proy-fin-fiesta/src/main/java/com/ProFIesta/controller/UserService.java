package com.ProFIesta.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


import com.ProFIesta.entity.User;
import com.ProFIesta.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserService {
    @GetMapping("/{id}")
    public static User getUserById(@PathVariable Long id){
        User user = UserService.getUserById(id);
        return user;
    }

    @PostMapping("/users")
     public User createUser(@RequestBody User user){
        
    }

    @PutMapping("/users/{id}")
    public 


}
