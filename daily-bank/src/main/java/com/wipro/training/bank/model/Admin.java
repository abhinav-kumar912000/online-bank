package com.wipro.training.bank.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:24:22 AM
Project-daily-bank
*/
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Admin {
	
    private double totalAmount;
    private List<Transaction> transactions = new ArrayList<>();

}
