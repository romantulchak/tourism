package com.tourism.controller.ViewModel;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.time.LocalDateTime;
import java.util.Set;

public class FlightViewModel {

    private Flight flight;

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    private int places;


    public int getPlaces() {
        return places;
    }

    public void setPlaces(int places) {
        this.places = places;
    }
}
