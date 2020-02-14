package com.tourism.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
public class Flight {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private LocalDateTime timeOfDeparture;
    private LocalDateTime arrivalTime;

    private int numberOfSeats;


    @ManyToMany
    private Set<Tourist> tourists;


    private double ticketPrice;

    @Override
    public String toString() {
        return "Flight{" +
                "id=" + id +
                ", timeOfDeparture=" + timeOfDeparture +"\n" +
                ", arrivalTime=" + arrivalTime +"\n" +
                ", numberOfSeats=" + numberOfSeats +"\n" +
                ", tourists=" + tourists +"\n" +
                ", ticketPrice=" + ticketPrice +"\n" +
                '}';
    }
}
