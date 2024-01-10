package com.aakash.restfulwebservices.restfulwebservices.exception;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class ErrorDetails {
	//timestamp
	
	public LocalDate timestamp;
	//message
	public String message;
	//details
	
	public String details;
	public ErrorDetails(LocalDate localDate, String message, String details) {
		super();
		this.timestamp = localDate;
		this.message = message;
		this.details = details;
	}
	public LocalDate getTimestamp() {
		return timestamp;
	}
	public String getMessage() {
		return message;
	}
	public String getDetails() {
		return details;
	}

	
	
	
	
	
	
	
	
	
}
