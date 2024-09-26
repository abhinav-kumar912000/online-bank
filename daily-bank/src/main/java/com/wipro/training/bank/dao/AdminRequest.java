package com.wipro.training.bank.dao;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:43:42 AM
Project-daily-bank
*/

@Data
public class AdminRequest {
	
	private String accountNumber;
    private double amount;
    private String username;
    private String password;

}
