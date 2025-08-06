package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
@Entity
@Table(name = "bookingheader")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingHeader {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    private LocalDateTime bookingDate;

    private int noOfPax;

    private double tourAmount;

    private double taxes;

    private double totalAmount;

    private String paymentStatus;

    @ManyToOne
    @JoinColumn(name = "cust_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private PackageMaster packageMaster;

    @ManyToOne
    @JoinColumn(name = "departure_id")
    private Departure departure;

    @OneToMany(mappedBy = "bookingHeader")
    @JsonIgnore
    private List<Passenger> passengers;
    
    @OneToMany(mappedBy = "booking")
    @JsonIgnore
    private List<PaymentStatus> paymentStatuses;

}
