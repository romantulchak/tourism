package com.tourism.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Proxy;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Proxy(lazy = false)

public class Tourist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    private String firstName;
    private String lastName;

    private String sex;
    private String country;

    private String notes;

    @DateTimeFormat(pattern = "yyyy-MM-dd", iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate birthday;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(
            name = "tourist_flight",
            joinColumns =  @JoinColumn(name = "tourist_id"),
            inverseJoinColumns = @JoinColumn(name = "flight_id"))
    @JsonIgnoreProperties("tourists")
    private List<Flight> flights = new ArrayList<>();

    public Tourist(String firstName, String lastName, String sex, String country, String notes){
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.country = country;
        this.notes = notes;
        this.birthday = LocalDate.of(2020, 10,15);
        this.flights = new ArrayList<>();
    }

    public Tourist(){

    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

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


    public void setFlights(List<Flight> flights) {
        this.flights = flights;
    }

    public List<Flight> getFlights() {
        return flights;
    }
}
