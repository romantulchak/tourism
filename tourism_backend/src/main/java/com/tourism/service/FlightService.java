package com.tourism.service;

import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.List;

public interface FlightService {

    List<Flight> allFlights();
    void addFlight(Flight flight);
    void deleteFlight(long id);

    Flight editFlight(long id);
    ResponseEntity<String> addTouristToFlight(Flight flight, Tourist tourist);
    ResponseEntity<String> deleteTouristFromFlight(long flightId, long touristId);
    List<Flight> getFlightsByParams(String location, String direction, LocalDateTime departureTime, LocalDateTime departureTime2);
    List<Flight> getFlightsByParams(String location, String direction);
    List<Flight> getFlightsByParams(LocalDateTime departureTime, LocalDateTime departureTime2, int numberOfSeats);
    List<Flight> getFlightsByParams(LocalDateTime timeOfDeparture, LocalDateTime timeOfDeparture2, String location, String direction, int numberOfSeats);
}
