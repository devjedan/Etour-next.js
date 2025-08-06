package com.example.services;

import com.example.models.PaymentStatus;

import java.util.List;

public interface PaymentStatusService {
    PaymentStatus save(PaymentStatus paymentStatus);
    List<PaymentStatus> getAll();
    PaymentStatus getById(int id);
    void deleteById(int id);
    List<PaymentStatus> getByCustomerId(int custId);
    List<PaymentStatus> getByBookingId(int bookingId);
}
