package com.tourism.controller;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.tourism.controller.ViewModel.TouristViewModel;
import com.tourism.model.Flight;
import com.tourism.model.Tourist;
import com.tourism.service.FlightService;
import com.tourism.service.impl.FlightServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
@RequestMapping("/api/flights")
@CrossOrigin(origins = "http://localhost:4200")
public class FlightController {



    private FlightServiceImpl flightService;

    @Autowired
    public FlightController(FlightServiceImpl flightService){
        this.flightService = flightService;
    }



    @PostMapping("/create")
    public void addFlight(@RequestBody Flight flight){


        flightService.addFlight(flight);
    }



    @GetMapping
    public List<Flight> allFlights(){

        /*
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");


        LocalDateTime localDateTimeDeparture =  LocalDateTime.now();
        LocalDateTime localDateTimeArrivall = LocalDateTime.now();
        String formattedLocalDateTime = localDateTimeDeparture.format(dateTimeFormatter);
        String formattedLocalDateTime1 = localDateTimeArrivall.format(dateTimeFormatter);
        for (int i =0; i < 1000; i++){
            Random random = new Random();
            int randomAmountOfDaysDeparture = random.nextInt(30- 5 + 1 ) +5;
            int radndomAmountOfYearsDeparture = random.nextInt(3 - 1 + 1) + 2;
            int randomAmountOfDaysArrival = random.nextInt(20- 5 + 1 ) +5;
            int radndomAmountOfYearsArrival = random.nextInt(3 - 1 + 1) + 2;




            LocalDateTime dateDeparture = localDateTimeDeparture.plusDays(randomAmountOfDaysDeparture).plusYears(radndomAmountOfYearsDeparture);
            LocalDateTime dateArrival = localDateTimeArrivall.plusDays(randomAmountOfDaysArrival).plusYears(radndomAmountOfYearsArrival);

            String formatedFutureDeparture = dateDeparture.format(dateTimeFormatter);
            String formatedFutureArrival = dateArrival.format(dateTimeFormatter);


            int n = 9;
            String location = getAlphaNumericString(n);
            String direction = getAlphaNumericString(n);
            Flight flight = new Flight(dateDeparture,new ArrayList<Tourist>(), dateArrival, 50, location,direction);
            flightService.addFlight(flight);
        }

        */

        return flightService.allFlights();
    }



    public String getAlphaNumericString(int n)
    {

        // length is bounded by 256 Character
        byte[] array = new byte[256];
        new Random().nextBytes(array);

        String randomString
                = new String(array, Charset.forName("UTF-8"));

        // Create a StringBuffer to store the result
        StringBuffer r = new StringBuffer();

        // remove all spacial char
        String  AlphaNumericString
                = randomString
                .replaceAll("[^A-Za-z0-9]", "");

        // Append first 20 alphanumeric characters
        // from the generated random String into the result
        for (int k = 0; k < AlphaNumericString.length(); k++) {

            if (Character.isLetter(AlphaNumericString.charAt(k))
                    && (n > 0)
                    || Character.isDigit(AlphaNumericString.charAt(k))
                    && (n > 0)) {

                r.append(AlphaNumericString.charAt(k));
                n--;
            }
        }

        // return the resultant string
        return r.toString();
    }




    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        flightService.deleteFlight(id);
    }

    @GetMapping("/editFlight/{id}")
    public Flight editFlight(@PathVariable long id){
        return this.flightService.editFlight(id);
    }

    @DeleteMapping("/deleteTouristFromFlight/{flightId}/{touristId}")
    public ResponseEntity<String> deleteTouristFromFlight(@PathVariable long flightId, @PathVariable long touristId){
       return this.flightService.deleteTouristFromFlight(flightId, touristId);
    }

    @PutMapping("/addTouristToFlight")
    public ResponseEntity<String> addTouristToFlight(@RequestBody TouristViewModel touristViewModel){
        return this.flightService.addTouristToFlight(touristViewModel.getFlight(), touristViewModel.getTourist());
    }


    @GetMapping("/getFlightsBy/")
    public List<Flight> getFlightsByParams(@RequestParam("location") String location, @RequestParam("direction") String direction, @RequestParam(value = "numberOfSeats", required = false) int numberOfSeats, @RequestParam(value = "departureTime") String departureTime, @RequestParam(value = "arrivalTime") String arrivalTime){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime arrivalDate = null;
        LocalDateTime departureDate = null;
        if (!departureTime.contains("null") && !arrivalTime.contains("null")) {
            arrivalDate = LocalDateTime.parse(arrivalTime, dateTimeFormatter);
            departureDate = LocalDateTime.parse(departureTime, dateTimeFormatter);
        }
            if (!location.contains("null") && !direction.contains("null") && arrivalDate != null && departureDate != null && numberOfSeats != 0){
                   return this.flightService.getFlightsByParams(departureDate,arrivalDate, location, direction, numberOfSeats);
            }else if(!location.contains("null") && !direction.contains("null") && arrivalDate != null && departureDate != null){
                return this.flightService.getFlightsByParams(location,direction, departureDate, arrivalDate);
            }else if(!location.contains("null") && !direction.contains("null")){
                return this.flightService.getFlightsByParams(location, direction);
            }else if (arrivalDate != null && departureDate != null && numberOfSeats != 0){
                return this.flightService.getFlightsByParams(departureDate,arrivalDate, numberOfSeats);
            }
            return null;
    }

}
