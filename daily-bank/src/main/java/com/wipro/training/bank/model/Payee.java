package com.wipro.training.bank.model;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 14, 2024
Time-11:48:14 AM
Project-daily-bank
*/
@Data
public class Payee {
	
	private String beneficiaryName;
    private String accountNumber;
    private String nickname; // Optional field

}
