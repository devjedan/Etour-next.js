package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int custId;

    @Column(length = 80, nullable = false)
    private String custFirstName;

    @Column(length = 80, nullable = false)
    private String custLastName;
    
    @Column(name = "cust_email", length = 80, nullable = false, unique = true)
    private String custEmail;

    public int getCustId() {
		return custId;
	}


	public void setCustId(int custId) {
		this.custId = custId;
	}


	public String getCustFirstName() {
		return custFirstName;
	}


	public void setCustFirstName(String custFirstName) {
		this.custFirstName = custFirstName;
	}


	public String getCustLastName() {
		return custLastName;
	}


	public void setCustLastName(String custLastName) {
		this.custLastName = custLastName;
	}


	public String getCustEmail() {
		return custEmail;
	}


	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}


	public String getCustPhone() {
		return custPhone;
	}


	public void setCustPhone(String custPhone) {
		this.custPhone = custPhone;
	}


	public Date getCustDob() {
		return custDob;
	}


	public void setCustDob(Date custDob) {
		this.custDob = custDob;
	}


	public String getCustGender() {
		return custGender;
	}


	public void setCustGender(String custGender) {
		this.custGender = custGender;
	}


	public String getCustAddress() {
		return custAddress;
	}


	public void setCustAddress(String custAddress) {
		this.custAddress = custAddress;
	}


	public String getCustCity() {
		return custCity;
	}


	public void setCustCity(String custCity) {
		this.custCity = custCity;
	}


	public String getCustState() {
		return custState;
	}


	public void setCustState(String custState) {
		this.custState = custState;
	}


	public String getCustPincode() {
		return custPincode;
	}


	public void setCustPincode(String custPincode) {
		this.custPincode = custPincode;
	}


	public List<BookingHeader> getBookings() {
		return bookings;
	}


	public void setBookings(List<BookingHeader> bookings) {
		this.bookings = bookings;
	}


	public Authentication getAuthentication() {
		return authentication;
	}


	public void setAuthentication(Authentication authentication) {
		this.authentication = authentication;
	}


	public List<PaymentStatus> getPayments() {
		return payments;
	}


	public void setPayments(List<PaymentStatus> payments) {
		this.payments = payments;
	}


	public List<Passenger> getPassengers() {
		return passengers;
	}


	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}

	@Column(length = 15, nullable = false)
    private String custPhone;

    private Date custDob;

    @Column(length = 10)
    private String custGender;

    @Column(columnDefinition = "TEXT")
    private String custAddress;

    private String custCity;

    private String custState;

    private String custPincode;


    private Timestamp custCreatedAt;

    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    private List<BookingHeader> bookings;
    
    @OneToOne(mappedBy = "customer")
    @JsonIgnore
    private Authentication authentication;
    
    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    private List<PaymentStatus> payments;

    
    //-->
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Passenger> passengers;


	public Timestamp getCustCreatedAt() {
		return custCreatedAt;
	}


	public void setCustCreatedAt(Timestamp custCreatedAt) {
		this.custCreatedAt = custCreatedAt;
	} 

	@PrePersist
	protected void onCreate() {
	    this.custCreatedAt = new Timestamp(System.currentTimeMillis());
	}
}
