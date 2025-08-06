package com.example.services;

import com.example.models.PaymentStatus;
import com.example.repositories.PaymentStatusRepository;
import com.example.services.PaymentStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentStatusServiceImpl implements PaymentStatusService {

    @Autowired
    private PaymentStatusRepository paymentStatusRepository;

    @Override
    public PaymentStatus save(PaymentStatus paymentStatus) {
        return paymentStatusRepository.save(paymentStatus);
    }

    @Override
    public List<PaymentStatus> getAll() {
        return paymentStatusRepository.findAll();
    }

    @Override
    public PaymentStatus getById(int id) {
        return paymentStatusRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(int id) {
        paymentStatusRepository.deleteById(id);
    }

    @Override
    public List<PaymentStatus> getByCustomerId(int custId) {
        return paymentStatusRepository.findByCustomer_CustId(custId);
    }

    @Override
    public List<PaymentStatus> getByBookingId(int bookingId) {
        return paymentStatusRepository.findByBooking_BookingId(bookingId);
    }
}
