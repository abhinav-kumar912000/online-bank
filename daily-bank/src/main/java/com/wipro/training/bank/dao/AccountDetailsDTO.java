package com.wipro.training.bank.dao;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-7:01:45 PM
Project-daily-bank
 */

@Data
public class AccountDetailsDTO {

	private String accountNumber;
	private String userId;
	
	private String title;
	private String firstName;
	private String middleName;
	private String lastName;
	private String fatherName;

	private String email;
	private String mobile;
	private String adhar;
	private String dob;
	
	private String addressLine1;
    private String addressLine2;
    private String landmark;
    private String state;
    private String city;
    private String pincode;
}
