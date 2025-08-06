package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
@Entity
@Table(name = "costmaster")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CostMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int costId;

    private double singlePersonCost;

    private double extraPersonCost;

    private double childWithBed;

    private double childWithoutBed;


    @ManyToOne
    @JoinColumn(name = "package_id")
    private PackageMaster packageMaster;
}
