package com.aakash.restfulwebservices.restfulwebservices.user;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class UserDaoService {

    // JPA/Hibernate > Database
    // UserDaoService > Static List

    private static List<User> users = new ArrayList<>();
    private static int usersCount = 0;

    static {
        users.add(new User(++usersCount, "John", LocalDate.now().minusYears(30)));
        users.add(new User(++usersCount, "Wick", LocalDate.now().minusYears(25)));
        users.add(new User(++usersCount, "Jason", LocalDate.now().minusYears(20)));
    }




    // public List<User> findAll () {

    public List<User> findAll(){
        return users;
    }

    // public User save(User user) {

    public User save(User user){
        user.setId(++usersCount);
        users.add(user);
        return user;
    }

    // public User findOne(int id) {
    public User findOne(int id){
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    
    // public User findOne and Delete(int id) {
    public void deleteOne(int id){
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        users.removeIf(predicate);
        
    }

}
