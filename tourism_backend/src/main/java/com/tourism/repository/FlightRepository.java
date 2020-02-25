package com.tourism.repository;

import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {

    List<Flight> getFlightsByLocationAndDirection(String location, String direction);
    List<Flight> findByTimeOfDepartureBetweenAndNumberOfSeatsGreaterThanEqual(LocalDateTime timeOfDeparture, LocalDateTime timeOfArrival, int numberOfSeats);
    List<Flight> findByTimeOfDepartureBetweenAndLocationAndDirection(LocalDateTime timeOfDeparture, LocalDateTime timeOfDeparture2, String location, String direction);
    List<Flight> findByTimeOfDepartureBetweenAndLocationAndDirectionAndNumberOfSeatsGreaterThanEqual(LocalDateTime timeOfDeparture, LocalDateTime timeOfDeparture2, String location, String direction, int numberOfSeats);

}
