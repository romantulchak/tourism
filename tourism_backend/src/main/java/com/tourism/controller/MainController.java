package com.tourism.controller;


import com.tourism.model.Flight;
import com.tourism.service.FlightService;
import com.tourism.service.impl.FlightServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/main")
@CrossOrigin
public class MainController {

    private FlightServiceImpl flightService;

    @Autowired
    public MainController(FlightServiceImpl flightService){
        this.flightService = flightService;
    }



    @GetMapping("/")
    public List<Flight> flightList(){
        return flightService.allFlights();
    }





}
