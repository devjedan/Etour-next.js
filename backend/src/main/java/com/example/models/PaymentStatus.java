package com.example.models;

import com.example.models.PaymentStatusEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table(name = "payment_status")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentStatusId;

    @Column(nullable = false)
    private String packageName;

    @Column(nullable = false)
    private double totalAmount;

    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private PaymentStatusEnum paymentStatus;

 
    @ManyToOne
    @JoinColumn(name = "booking_id", referencedColumnName = "bookingId")
    private BookingHeader booking;

   
    @ManyToOne
    @JoinColumn(name = "cust_id", referencedColumnName = "custId")
    private Customer customer;
}

