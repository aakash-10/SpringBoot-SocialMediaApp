package com.aakash.restfulwebservices.restfulwebservices.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import jakarta.validation.Valid;

import java.net.URI;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
public class UserResource {

    private UserDaoService service;

    public UserResource(UserDaoService service){
        this.service = service;
    }
    // GET /user

    @GetMapping("/users")
    public List<User> retrieveAllUsers(){
        return service.findAll();
    }

    @GetMapping("/users/{userid}")
    public User retrieveUser(@PathVariable Integer userid){
    	User user = service.findOne(userid);
    	if(user==null) {
    		throw new UserNotFoundException("userid"+userid);
    	}
        return user;
    }
    
    
    @DeleteMapping("/users/{userid}")
    public void deleteUser(@PathVariable Integer userid){
    	service.deleteOne(userid);
		
        
    }
    

    @PostMapping("/users")
    public ResponseEntity<Object> createUser(@Valid @RequestBody User user){
        User savedUser = service.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(savedUser.getId()).toUri();
        return ResponseEntity.created(null).build();

    }

}
