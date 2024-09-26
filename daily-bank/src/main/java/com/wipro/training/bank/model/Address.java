package com.wipro.training.bank.model;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:23:56 AM
Project-daily-bank
*/

@Data
public class Address {
	
	private String addressLine1;
    private String addressLine2;
    private String landmark;
    private String state;
    private String city;
    private String pincode;

}
