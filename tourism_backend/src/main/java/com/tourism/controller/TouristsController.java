package com.tourism.controller;

import com.tourism.controller.ViewModel.TouristViewModel;
import com.tourism.model.Tourist;
import com.tourism.service.TouristService;
import com.tourism.service.impl.TouristServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;

@RestController
@RequestMapping("/api/tourists")
@CrossOrigin(origins = "http://localhost:4200")
public class TouristsController {

    private TouristServiceImpl touristService;

    public TouristsController(TouristServiceImpl touristService){
        this.touristService = touristService;
    }

    @GetMapping("/all")
    public List<Tourist> getAllTourists(){
        return touristService.allTourists();
    }

    @PostMapping
    public void createTourist(@RequestBody Tourist tourist){

        //Tourist tourist1 = new Tourist();
        //tourist1.setFirstName(tourist.getFirstName());
        //tourist1.setLastName(tourist.getLastName());

        //tourist1.setSex(tourist.getSex());
        //tourist1.setCountry(tourist.getCountry());

        //tourist1.setNotes(tourist.getNotes());


        tourist.setFlights(new HashSet<>());
        touristService.addTourist(tourist);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTourist(@PathVariable long id){
        this.touristService.deleteTourist(id);
    }

    @GetMapping("/edit/{id}")
    public Tourist editTourist(@PathVariable long id){
        return this.touristService.editTourist(id);
    }

}

