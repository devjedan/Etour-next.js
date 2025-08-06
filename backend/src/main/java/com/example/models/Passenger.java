package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;


@Entity
@Table(name = "passenger")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paxId;

    private String paxName;

    private LocalDate paxBirthdate;
    
    private int paxAge;

    @Enumerated(EnumType.STRING)
    @Column(length = 30)
    private PaxType paxType;

    private double paxAmount;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private BookingHeader bookingHeader;
    
    
   
    public Customer getCustomer() {
		return customer;
	}



	public void setCustomer(Customer customer) {
		this.customer = customer;
	}



	@ManyToOne
    @JoinColumn(name = "cust_id") 
	@JsonIgnore// This should match your foreign key column in passenger table
    private Customer customer;



	public int getPaxId() {
		return paxId;
	}



	public void setPaxId(int paxId) {
		this.paxId = paxId;
	}



	public String getPaxName() {
		return paxName;
	}



	public void setPaxName(String paxName) {
		this.paxName = paxName;
	}



	public LocalDate getPaxBirthdate() {
		return paxBirthdate;
	}



	public void setPaxBirthdate(LocalDate paxBirthdate) {
		this.paxBirthdate = paxBirthdate;
	}



	public int getPaxAge() {
		return paxAge;
	}



	public void setPaxAge(int paxAge) {
		this.paxAge = paxAge;
	}



	public PaxType getPaxType() {
		return paxType;
	}



	public void setPaxType(PaxType paxType) {
		this.paxType = paxType;
	}



	public double getPaxAmount() {
		return paxAmount;
	}



	public void setPaxAmount(double paxAmount) {
		this.paxAmount = paxAmount;
	}



	public BookingHeader getBookingHeader() {
		return bookingHeader;
	}



	public void setBookingHeader(BookingHeader bookingHeader) {
		this.bookingHeader = bookingHeader;
	}
	
	
}