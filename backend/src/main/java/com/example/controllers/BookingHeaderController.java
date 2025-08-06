package com.example.controllers;

import com.example.models.BookingHeader;
import com.example.services.BookingHeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingHeaderController {

    @Autowired
    private BookingHeaderService bookingService;

    @PostMapping
    public ResponseEntity<BookingHeader> createBooking(@RequestBody BookingHeader booking) {
        return ResponseEntity.ok(bookingService.createBooking(booking));
    }

    @GetMapping
    public ResponseEntity<List<BookingHeader>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingHeader> getBookingById(@PathVariable int id) {
        return bookingService.getBookingById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/customer/{custId}")
    public ResponseEntity<List<BookingHeader>> getBookingsByCustomerId(@PathVariable int custId) {
        return ResponseEntity.ok(bookingService.getBookingsByCustomerId(custId));
    }
}
