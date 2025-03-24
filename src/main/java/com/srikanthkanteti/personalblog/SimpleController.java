package com.srikanthkanteti.personalblog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleController {
    @GetMapping("/test")
    public String testEndpoint() {
        return "Test endpoint response";
    }
}
