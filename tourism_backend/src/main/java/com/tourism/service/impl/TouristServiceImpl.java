package com.tourism.service.impl;

import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import com.tourism.repository.FlightRepository;
import com.tourism.repository.TouristRepository;
import com.tourism.service.TouristService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TouristServiceImpl implements TouristService {

    private TouristRepository touristRepository;
    private FlightRepository flightRepository;

    @Autowired
    public TouristServiceImpl(TouristRepository touristRepository, FlightRepository flightRepository){
        this.touristRepository = touristRepository;
        this.flightRepository = flightRepository;
    }



    @Override
    public List<Tourist> allTourists() {
        List<Tourist> tourists = touristRepository.findAll();
        return tourists;
    }

    @Override
    public void addTourist(Tourist tourist) {

        Tourist touristFromDb = touristRepository.findByFirstNameAndLastName(tourist.getFirstName(), tourist.getLastName());
        if (touristFromDb == null){
            tourist.setFlights(new ArrayList<>());
            touristRepository.save(tourist);
        }else {
            System.out.println("Tourist already exist");
        }

    }

    @Override
    public List<Tourist> deleteTourist(long id) {
        Tourist tourist = this.touristRepository.findById(id).orElse(null);
        if(tourist !=null){
            if(!tourist.getFlights().isEmpty()){
                for (Flight flight : tourist.getFlights()){
                    flight.setNumberOfSeats(flight.getNumberOfSeats() + 1);
                    flightRepository.save(flight);
                }
                tourist.getFlights().removeAll(tourist.getFlights());
            }
            this.touristRepository.deleteById(id);
        }

        return this.touristRepository.findAll();
    }

    @Override
    public Tourist editTourist(long id) {


        return this.touristRepository.findById(id).orElse(null);
    }

    @Override
    public ResponseEntity<String> addFlight(Flight flight, long id, int places) {
        Tourist tourist = this.touristRepository.findById(id).orElse(null);
        Flight flightToSave = flightRepository.findById(flight.getId()).orElse(null);
          if (tourist !=null && flightToSave != null) {
              boolean flightAlreadyExist = tourist.getFlights().contains(flightToSave);
              if (!flightAlreadyExist){
              flightToSave.setNumberOfSeats(flightToSave.getNumberOfSeats() - places);
              if (flightToSave.getNumberOfSeats() >= 0) {
                  tourist.getFlights().add(flightToSave);
                  this.flightRepository.save(flightToSave);
                  this.touristRepository.save(tourist);
                 return new ResponseEntity<>("{\"message\" : \"Ok\"}", HttpStatus.OK);
              }else {
                  return new ResponseEntity<>("{\"message\" : \"No tickets\"}", HttpStatus.OK);
              }
              }else {
                  return new ResponseEntity<>("{\"message\" : \"Ticket already purchased\"}", HttpStatus.OK);
              }
          }else {
              return new ResponseEntity<>("{\"message\" : \"Bad request\"}", HttpStatus.OK);
          }

    }

    @Override
    public ResponseEntity<String> deleteFlight(long touristId, long flightId) {
        Tourist tourist = this.touristRepository.findById(touristId).orElse(null);
        Flight flight = this.flightRepository.findById(flightId).orElse(null);
        if (tourist != null && flight !=null){

            if (tourist.getFlights().contains(flight)){
                tourist.getFlights().remove(flight);
                this.touristRepository.save(tourist);
                flight.setNumberOfSeats(flight.getNumberOfSeats() + 1);
                this.flightRepository.save(flight);
                return new ResponseEntity<>("{\"message\" : \"Okay\"}", HttpStatus.OK);
            }else {
                return new ResponseEntity<>("{\"message\" : \"The flight not found\"}", HttpStatus.BAD_REQUEST);
            }

        }else {
            return new ResponseEntity<>("{\"message\" : \"Tourist or flight is null\"}", HttpStatus.BAD_REQUEST);

        }
    }
}
