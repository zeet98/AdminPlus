package com.jrp.pma.dto;

public interface EmployeeProject {

	//need to have the property names begin with get...how Spring Data knows we have to use this
	public String getFirstName();
	public String getLastName();
	public int getProjectCount();
}
