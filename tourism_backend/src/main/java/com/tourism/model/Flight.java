package com.tourism.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;
import com.sun.istack.NotNull;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Flight {

    public Flight(){

    }
    public Flight(LocalDateTime timeOfDeparture, List<Tourist> tourists, LocalDateTime arrivalTime, double ticketPrice, String location, String direction){
        this.timeOfDeparture = timeOfDeparture;
        this.tourists = tourists;
        this.arrivalTime = arrivalTime;
        this.ticketPrice = ticketPrice;
        this.location = location;
        this.direction = direction;
        this.numberOfSeats = 4;
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;



    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime timeOfDeparture;


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime arrivalTime;

    private int numberOfSeats;

    @ManyToMany(mappedBy = "flights", cascade = {CascadeType.PERSIST})
    @JsonIgnoreProperties("flights")

    private List<Tourist> tourists = new ArrayList<>();


    public List<Tourist> getTourists() {
        return tourists;
    }

    public void setTourists(List<Tourist> tourists) {
        this.tourists = tourists;
    }

    private double ticketPrice;

    private String location;

    private String direction;






    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDateTime getTimeOfDeparture() {
        return timeOfDeparture;
    }

    public void setTimeOfDeparture(LocalDateTime timeOfDeparture) {
        this.timeOfDeparture = timeOfDeparture;
    }

    public LocalDateTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalDateTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }


    public double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    @PreRemove
    public void removeTourist(){
        tourists.forEach(t -> t.getFlights().remove(this));
    }


}
