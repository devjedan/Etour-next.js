package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
@Entity
@Table(name = "packagemaster")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class PackageMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int packageId;

    private String packageName;

    private String packageInfo;

    private String packageImagePath;

    public int getPackageId() {
		return packageId;
	}

	public void setPackageId(int packageId) {
		this.packageId = packageId;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public String getPackageInfo() {
		return packageInfo;
	}

	public void setPackageInfo(String packageInfo) {
		this.packageInfo = packageInfo;
	}

	public String getPackageImagePath() {
		return packageImagePath;
	}

	public void setPackageImagePath(String packageImagePath) {
		this.packageImagePath = packageImagePath;
	}

	public Integer getDurationDays() {
		return durationDays;
	}

	public void setDurationDays(Integer durationDays) {
		this.durationDays = durationDays;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public CategoryMaster getCategory() {
		return category;
	}

	public void setCategory(CategoryMaster category) {
		this.category = category;
	}

	public List<ItineraryMaster> getItineraries() {
		return itineraries;
	}

	public void setItineraries(List<ItineraryMaster> itineraries) {
		this.itineraries = itineraries;
	}

	public List<CostMaster> getCosts() {
		return costs;
	}

	public void setCosts(List<CostMaster> costs) {
		this.costs = costs;
	}

	public List<Departure> getDepartures() {
		return departures;
	}

	public void setDepartures(List<Departure> departures) {
		this.departures = departures;
	}

	public List<BookingHeader> getBookings() {
		return bookings;
	}

	public void setBookings(List<BookingHeader> bookings) {
		this.bookings = bookings;
	}

	private Integer durationDays;

    private LocalDate startDate;

    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "ctg_master_id")
    private CategoryMaster category;

    @OneToMany(mappedBy = "packageMaster")
    @JsonIgnore
    private List<ItineraryMaster> itineraries;

    @OneToMany(mappedBy = "packageMaster")
    @JsonIgnore
    private List<CostMaster> costs;

    @OneToMany(mappedBy = "packageMaster")
    @JsonIgnore
    private List<Departure> departures;

    @OneToMany(mappedBy = "packageMaster")
    @JsonIgnore
    private List<BookingHeader> bookings;
}
