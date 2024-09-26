package com.wipro.training.bank.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.training.bank.dao.AdminRequest;
import com.wipro.training.bank.exception.UnauthorizedException;
import com.wipro.training.bank.model.Admin;
import com.wipro.training.bank.service.AdminService;

/*
Author-Abhinav Kumar
Date-Sep 13, 2024
Time-9:32:20 AM
Project-daily-bank
 */

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    private final AdminService adminService;

    // Admin credentials for authentication
    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "admin123";

    // Constructor for injecting dependencies
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    /* 
     * Endpoint to credit money to an account
     * Sample request:
     * POST http://localhost:8085/api/admin/credit
     * {
     *     "accountNumber": "1947969018",
     *     "amount": 800.00,
     *     "username": "admin",
     *     "password": "admin123"
     * }
     */
    @PostMapping("/credit")
    public Admin creditMoney(@RequestBody AdminRequest request) {

        logger.info("Admin attempting to credit money for account number: {}", request.getAccountNumber());

        // Authenticate admin credentials
        if (authenticate(request.getUsername(), request.getPassword())) {
            return adminService.creditMoney(request); // Process the credit request
        } else {
            throw new UnauthorizedException("Invalid admin credentials"); // Handle invalid credentials
        }
    }

    /* 
     * Endpoint to debit money from an account
     * Sample request:
     * POST http://localhost:8085/api/admin/debit
     * {
     *     "accountNumber": "1947969018",
     *     "amount": 100.00,
     *     "username": "admin",
     *     "password": "admin123"
     * }
     */
    @PostMapping("/debit")
    public Admin debitMoney(@RequestBody AdminRequest request) {

        logger.info("Admin attempting to debit money for account number: {}", request.getAccountNumber());

        // Authenticate admin credentials
        if (authenticate(request.getUsername(), request.getPassword())) {
            return adminService.debitMoney(request); // Process the debit request
        } else {
            throw new UnauthorizedException("Invalid admin credentials"); // Handle invalid credentials
        }
    }

    // Private method to authenticate admin credentials
    private boolean authenticate(String username, String password) {
        return ADMIN_USERNAME.equals(username) && ADMIN_PASSWORD.equals(password);
    }
}
