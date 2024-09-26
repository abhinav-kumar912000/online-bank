package com.wipro.training.bank.dao;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 21, 2024
Time-7:50:12 AM
Project-daily-bank
 */

@Data
public class PasswordUpdateRequest {

	private String userId;
	private String newPassword;

}
