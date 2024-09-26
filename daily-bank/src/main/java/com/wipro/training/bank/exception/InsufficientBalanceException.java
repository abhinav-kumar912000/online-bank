package com.wipro.training.bank.exception;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-5:44:01 PM
Project-daily-bank
*/

public class InsufficientBalanceException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InsufficientBalanceException(String message) {
        super(message);
    }
}

