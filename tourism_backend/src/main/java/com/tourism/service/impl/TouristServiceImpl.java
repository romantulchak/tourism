package com.tourism.service.impl;

import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import com.tourism.repository.TouristRepository;
import com.tourism.service.TouristService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TouristServiceImpl implements TouristService {

    private TouristRepository touristRepository;

    @Autowired
    public TouristServiceImpl(TouristRepository touristRepository){
        this.touristRepository = touristRepository;
    }



    @Override
    public List<Tourist> allTourists() {
        return touristRepository.findAll();
    }

    @Override
    public void addTourist(Tourist tourist) {
        touristRepository.save(tourist);
    }

    @Override
    public void deleteTourist(long id) {
        this.touristRepository.deleteById(id);
    }

    @Override
    public Tourist editTourist(long id) {
        Tourist tourist = touristRepository.findById(id).orElse(null);

        System.out.println(tourist.getFirstName());
        for (Flight flight : tourist.getFlights()){
            System.out.println(flight);
        }
        return this.touristRepository.findById(id).orElse(null);
    }
}
