package com.tourism.controller;

import com.tourism.controller.ViewModel.FlightViewModel;
import com.tourism.controller.ViewModel.TouristViewModel;
import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import com.tourism.repository.TouristRepository;
import com.tourism.service.TouristService;
import com.tourism.service.impl.TouristServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api/tourists")
@CrossOrigin(origins = "http://localhost:4200")
public class TouristsController {

    private TouristServiceImpl touristService;


    @Autowired
    public TouristsController(TouristServiceImpl touristService){

        this.touristService = touristService;

    }

    @GetMapping("/all")
    public List<Tourist> getAllTourists(){

        return touristService.allTourists();
    }

    @PostMapping("/create")
    public void createTourist(@RequestBody Tourist tourist){

        touristService.addTourist(tourist);
    }





    @DeleteMapping("/delete/{id}")
    public List<Tourist> deleteTourist(@PathVariable long id){
       return this.touristService.deleteTourist(id);
    }

    @GetMapping("/edit/{id}")
    public Tourist editTourist(@PathVariable long id){
        return touristService.editTourist(id);
    }


    @PutMapping(value = "/addFlight/{id}", produces = "application/json")
    public ResponseEntity<String> addFlight(@PathVariable int id, @RequestBody FlightViewModel flightViewModel){


        return this.touristService.addFlight(flightViewModel.getFlight(), id, flightViewModel.getPlaces());

    }
    @DeleteMapping(value = "/deleteFlight/{touristId}/{flightId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> deleteFlight(@PathVariable long touristId, @PathVariable long flightId){
         return this.touristService.deleteFlight(touristId, flightId);
    }

}

