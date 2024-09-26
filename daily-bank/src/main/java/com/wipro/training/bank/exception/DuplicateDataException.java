package com.wipro.training.bank.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
/*
Author-Abhinav Kumar
Date-Sep 16, 2024
Time-6:41:48 PM
Project-daily-bank
*/



@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class DuplicateDataException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DuplicateDataException(String message) {
        super(message);
    }
}
