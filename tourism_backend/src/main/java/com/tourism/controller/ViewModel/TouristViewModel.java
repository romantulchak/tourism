package com.tourism.controller.ViewModel;

import com.sun.istack.NotNull;

public class TouristViewModel {

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String sex;

    @NotNull
    private String country;

    @NotNull
    private String notes;


    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getSex() {
        return sex;
    }

    public String getCountry() {
        return country;
    }

    public String getNotes() {
        return notes;
    }
}
