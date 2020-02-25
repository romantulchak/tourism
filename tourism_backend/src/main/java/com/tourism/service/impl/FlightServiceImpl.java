package com.tourism.service.impl;

import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import com.tourism.repository.FlightRepository;
import com.tourism.repository.TouristRepository;
import com.tourism.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class FlightServiceImpl implements FlightService {
    private FlightRepository flightRepository;
    private TouristRepository touristRepository;

    @Autowired
    public FlightServiceImpl(FlightRepository flightRepository, TouristRepository touristRepository){
        this.flightRepository = flightRepository;
        this.touristRepository = touristRepository;
    }

    @Override
    public List<Flight> allFlights() {
        List<Flight> flights = flightRepository.findAll();

        return flightRepository.findAll();
    }

    @Override
    public void addFlight(Flight flight) {
        this.flightRepository.save(flight);
    }

    @Override
    public void deleteFlight(long id) {

        Flight flight = this.flightRepository.findById(id).orElse(null);


        this.flightRepository.delete(flight);
    }

    //TOOD: перевірка на null
    @Override
    public Flight editFlight(long id) {
        return this.flightRepository.findById(id).orElse(null);
    }

    @Override
    public ResponseEntity<String> deleteTouristFromFlight(long flightId, long touristId){
        Flight flight = this.flightRepository.findById(flightId).orElse(null);
        Tourist tourist = this.touristRepository.findById(touristId).orElse(null);
        if (flight != null && tourist != null){
            tourist.getFlights().remove(flight);
            flight.setNumberOfSeats(flight.getNumberOfSeats() + 1);
            this.touristRepository.save(tourist);
            this.flightRepository.save(flight);
            return new ResponseEntity<>("{\"message\" : \"Ok\"}", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("{\"message\" : \"Not found\"}", HttpStatus.OK);
        }
    }



    @Override
    public List<Flight> getFlightsByParams(String location, String direction) {
        List<Flight> flights = this.flightRepository.getFlightsByLocationAndDirection(location, direction);
        return this.flightRepository.getFlightsByLocationAndDirection(location, direction);
    }

    @Override
    public List<Flight> getFlightsByParams(String location, String direction, LocalDateTime departureTime, LocalDateTime departureTime2) {
        return this.flightRepository.findByTimeOfDepartureBetweenAndLocationAndDirection(departureTime, departureTime2, location, direction);
    }

    @Override
    public List<Flight> getFlightsByParams(LocalDateTime timeOfDeparture, LocalDateTime timeOfDeparture2, String location, String direction, int numberOfSeats) {
        return this.flightRepository.findByTimeOfDepartureBetweenAndLocationAndDirectionAndNumberOfSeatsGreaterThanEqual(timeOfDeparture, timeOfDeparture2, location,direction,numberOfSeats);
    }

    @Override
    public List<Flight> getFlightsByParams(LocalDateTime departureTime, LocalDateTime departureTime2, int numberOfSeats) {
        return this.flightRepository.findByTimeOfDepartureBetweenAndNumberOfSeatsGreaterThanEqual(departureTime, departureTime2, numberOfSeats);
    }

    @Override
    public ResponseEntity<String> addTouristToFlight(Flight flight, Tourist tourist){
        if (flight != null && tourist != null){
            if (!flight.getTourists().contains(tourist)){
                flight.setNumberOfSeats(flight.getNumberOfSeats() - 1);
                if (flight.getNumberOfSeats() >= 0){
                    flight.getTourists().add(tourist);
                    tourist.getFlights().add(flight);
                    flightRepository.save(flight);
                    touristRepository.save(tourist);
                    return new ResponseEntity<>("{\"message\" : \"ok\"}", HttpStatus.OK);
                }else {
                    return new ResponseEntity<>("{\"message\" : \"Place not found\"}", HttpStatus.OK);
                }
            }else {
                return new ResponseEntity<>("{\"message\" : \"Tourist had already added\"}", HttpStatus.OK);
            }
        }else {
            return new ResponseEntity<>("{\"message\" : \"Tourist or Flight not found\"}", HttpStatus.OK);
        }

    }
}
