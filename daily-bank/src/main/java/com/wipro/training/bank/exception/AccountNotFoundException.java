package com.wipro.training.bank.exception;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-10:43:09 AM
Project-daily-bank
*/

public class AccountNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public AccountNotFoundException(String message) {
        super(message);
    }

}
