package com.example.services;

import com.example.models.BookingHeader;
import com.example.repositories.BookingHeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingHeaderServiceImpl implements BookingHeaderService {

    @Autowired
    private BookingHeaderRepository bookingHeaderRepository;

    @Override
    public BookingHeader createBooking(BookingHeader booking) {
        return bookingHeaderRepository.save(booking);
    }

    @Override
    public List<BookingHeader> getAllBookings() {
        return bookingHeaderRepository.findAll();
    }

    @Override
    public Optional<BookingHeader> getBookingById(int id) {
        return bookingHeaderRepository.findById(id);
    }

    

    @Override
    public List<BookingHeader> getBookingsByCustomerId(int customerId) {
        return bookingHeaderRepository.findByCustomerCustId(customerId);
    }
}
