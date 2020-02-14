package com.tourism.service.impl;

import com.tourism.model.Flight;
import com.tourism.repository.FlightRepository;
import com.tourism.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightServiceImpl implements FlightService {
    private FlightRepository flightRepository;

    @Autowired
    public FlightServiceImpl(FlightRepository flightRepository){
        this.flightRepository = flightRepository;
    }

    @Override
    public List<Flight> allFlights() {
        return flightRepository.findAll();
    }

    @Override
    public void addFlight(Flight flight) {

    }

    @Override
    public void deleteFlight(long id) {

    }

    @Override
    public void editFlight(long id) {

    }
}
