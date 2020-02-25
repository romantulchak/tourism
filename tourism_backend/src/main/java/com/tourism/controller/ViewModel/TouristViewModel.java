package com.tourism.controller.ViewModel;

import com.sun.istack.NotNull;
import com.tourism.model.Flight;
import com.tourism.model.Tourist;

import java.util.Set;

public class TouristViewModel {

    private Flight flight;
    private Tourist tourist;

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Tourist getTourist() {
        return tourist;
    }

    public void setTourist(Tourist tourist) {
        this.tourist = tourist;
    }
}
