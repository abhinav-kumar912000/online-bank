package com.wipro.training.bank.dao;

import lombok.Data;

/*
Author-Abhinav Kumar
Date-Sep 14, 2024
Time-4:59:28 PM
Project-daily-bank
*/

@Data
public class SetNewPasswordRequest {
	
	private String userId;
    private String oldPassword;
    private String newPassword;
    private String confirmNewPassword;

}
