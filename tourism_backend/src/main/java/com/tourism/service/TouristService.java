package com.tourism.service;

import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface TouristService {

    List<Tourist> allTourists();
    void addTourist(Tourist tourist);
    List<Tourist> deleteTourist(long id);
    Tourist editTourist(long id);
    ResponseEntity<String> addFlight(Flight flight, long id, int places);
    ResponseEntity<String> deleteFlight(long touristId, long flightId);








}
