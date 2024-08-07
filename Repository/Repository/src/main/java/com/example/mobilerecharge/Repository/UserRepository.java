package com.example.mobilerecharge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.mobilerecharge.Model.User;
// import java.util.List;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // @Query(value = "select u from User u where u.email = ?1")
    User findByEmail(String email);
}
