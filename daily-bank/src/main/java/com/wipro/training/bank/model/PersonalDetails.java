package com.wipro.training.bank.model;

import org.springframework.data.mongodb.core.index.Indexed;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:22:32 AM
Project-daily-bank
*/

@Data
public class PersonalDetails {
	
	private String title;
    private String firstName;
    private String middleName;
    private String lastName;
    private String fatherName;
    
    @Indexed(unique = true)
    private String mobile;

    @Indexed(unique = true)
    private String email;

    @Indexed(unique = true)
    private String adhar;

    private String dob;

}
