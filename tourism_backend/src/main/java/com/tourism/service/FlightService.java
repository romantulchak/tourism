package com.tourism.service;

import com.tourism.model.Flight;

import java.util.List;

public interface FlightService {

    List<Flight> allFlights();
    void addFlight(Flight flight);
    void deleteFlight(long id);

    void editFlight(long id);




}
