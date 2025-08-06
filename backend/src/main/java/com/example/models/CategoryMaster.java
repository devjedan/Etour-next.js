package com.example.models;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;

//import java.util.List;

@Entity
@Table(name = "categorymaster")
public class CategoryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ctg_master_id")
    private Integer ctgMasterId;

    @Column(name = "ctg_id", length = 20, nullable = false)
    private String ctgId;

    @Column(name = "sub_ctg_name", length = 20)
    private String subCtgName;

    @Column(name = "ctg_name", length = 50)
    private String ctgName;
    
    @Column(name = "ctg_desc", length = 50)
    private String ctgDesc;
    
    @Column(name = "ctg_features", length = 100)
    private String ctgFeatures;
    

    public String getCtgDesc() {
		return ctgDesc;
	}

	public void setCtgDesc(String ctgDesc) {
		this.ctgDesc = ctgDesc;
	}



	@Column(name = "ctg_img_path", length = 50)
    private String ctgImgPath;

    @Column(name = "flag")
    private Boolean flag;

    // Getters and Setters

    public Integer getCtgMasterId() {
        return ctgMasterId;
    }

    public void setCtgMasterId(Integer ctgMasterId) {
        this.ctgMasterId = ctgMasterId;
    }

    public String getCtgId() {
        return ctgId;
    }

    public void setCtgId(String ctgId) {
        this.ctgId = ctgId;
    }

    public String getSubCtgName() {
        return subCtgName;
    }

    public void setSubCtgName(String subCtgName) {
        this.subCtgName = subCtgName;
    }

    public String getCtgName() {
        return ctgName;
    }

    public void setCtgName(String ctgName) {
        this.ctgName = ctgName;
    }

    public String getCtgImgPath() {
        return ctgImgPath;
    }

    public void setCtgImgPath(String ctgImgPath) {
        this.ctgImgPath = ctgImgPath;
    }

    public Boolean getFlag() {
        return flag;
    }

    public void setFlag(Boolean flag) {
        this.flag = flag;
    }  
    
}