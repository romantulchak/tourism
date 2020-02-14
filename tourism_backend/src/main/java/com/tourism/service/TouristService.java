package com.tourism.service;

import com.tourism.model.Tourist;

import java.util.List;

public interface TouristService {

    List<Tourist> allTourists();
    void addTourist(Tourist tourist);
    void deleteTourist(long id);
    Tourist editTourist(long id);









}
