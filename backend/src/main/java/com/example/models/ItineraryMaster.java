package com.example.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "itinerarymaster")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class ItineraryMaster {
    public int getItineraryId() {
		return itineraryId;
	}

	public void setItineraryId(int itineraryId) {
		this.itineraryId = itineraryId;
	}

	public Integer getDayNo() {
		return dayNo;
	}

	public void setDayNo(Integer dayNo) {
		this.dayNo = dayNo;
	}

	public String getDetailHeader() {
		return detailHeader;
	}

	public void setDetailHeader(String detailHeader) {
		this.detailHeader = detailHeader;
	}

	public String getDayDetail() {
		return dayDetail;
	}

	public void setDayDetail(String dayDetail) {
		this.dayDetail = dayDetail;
	}

	public PackageMaster getPackageMaster() {
		return packageMaster;
	}

	public void setPackageMaster(PackageMaster packageMaster) {
		this.packageMaster = packageMaster;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itineraryId;

    private Integer dayNo;
    
    private String detailHeader;

    private String dayDetail;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private PackageMaster packageMaster;
}
