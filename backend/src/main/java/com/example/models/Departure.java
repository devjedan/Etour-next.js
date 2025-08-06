package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
@Entity
@Table(name = "departure")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Departure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int departureId;

    private LocalDate departDate;

    private LocalDate endDate;

    private Integer noOfDays;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private PackageMaster packageMaster;

    @OneToMany(mappedBy = "departure")
    @JsonIgnore
    private List<BookingHeader> bookings;
}