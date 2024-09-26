package com.wipro.training.bank.exception;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-10:12:24 AM
Project-daily-bank
*/

public class UnauthorizedException extends RuntimeException {
	
	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UnauthorizedException(String message) {
	        super(message);
	    }

}
