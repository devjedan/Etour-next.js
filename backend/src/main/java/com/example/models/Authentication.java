package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
@Entity
@Table(name = "authentication")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Authentication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int authId;

    @Column(nullable = false, unique = true, length = 80)
    private String username;  // typically the email or user ID

    @Column(nullable = false)
    private String password;

   
    @Column(nullable = false)
    private boolean enabled = true;  

    @OneToOne
    @JoinColumn(name = "cust_id", referencedColumnName = "custId")
    private Customer customer;
}
