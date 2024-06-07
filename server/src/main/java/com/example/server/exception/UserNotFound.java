package com.example.server.exception;

public class UserNotFound extends Exception{
    public UserNotFound(String message){
        super(message);
    }
}
