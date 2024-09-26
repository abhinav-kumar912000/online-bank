package com.wipro.training.bank.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:20:18 AM
Project-daily-bank
*/

@Data
@Document(collection = "accounts")
public class Account {
	
	@Id
    private String accountId;
	
    private String accountNumber; // Automatically generated 10-digit number
    private String userId; // Unique user identifier
    private String loginPassword;
    private String transactionPassword;
    
    private PersonalDetails personalDetails;
    
    private Address address;
    
    private Admin admin;
    
    private List<Payee> payees = new ArrayList<>();

}
