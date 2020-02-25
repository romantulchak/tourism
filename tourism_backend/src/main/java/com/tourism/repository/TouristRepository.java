package com.tourism.repository;

import com.tourism.model.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TouristRepository extends JpaRepository<Tourist, Long> {
    Tourist findByFirstNameAndLastName(String firstName, String lastName);

}
