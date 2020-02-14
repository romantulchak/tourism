package com.tourism.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Tourist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    private String firstName;
    private String lastName;

    private String sex;
    private String country;

    private String notes;


    @ManyToMany
    @JoinTable(
            name = "tourist_flight",
            joinColumns =  @JoinColumn(name = "tourist_id"),
            inverseJoinColumns = @JoinColumn(name = "flight_id"))
    private Set<Flight> flights;

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Set<Flight> getFlights() {
        return flights;
    }

    public void setFlights(Set<Flight> flights) {
        this.flights = flights;
    }


}
