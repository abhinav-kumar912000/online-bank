package com.wipro.training.bank.dao;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:42:07 AM
Project-daily-bank
 */

@Data
public class LoginRequest {

	private String userId;
	private String loginPassword;

}
