package com.wipro.training.bank.exception;

/*
Author-Abhinav Kumar
Date-Sep 14, 2024
Time-12:20:25 PM
Project-daily-bank
*/

public class ResourceNotFoundException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(String message) {
        super(message);
    }
}
