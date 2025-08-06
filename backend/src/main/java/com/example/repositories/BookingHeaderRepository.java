package com.example.repositories;

import com.example.models.BookingHeader;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingHeaderRepository extends JpaRepository<BookingHeader, Integer> {
    List<BookingHeader> findByCustomerCustId(int custId);  // Fetch bookings by Customer ID
}
