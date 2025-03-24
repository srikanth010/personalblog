package com.srikanthkanteti.personalblog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ContactController {
     @Autowired
    private EmailService emailService;

    @PostMapping("/api/contact")
    public ResponseEntity<String> handleContactRequest(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("subject") String subject,
            @RequestParam("message") String message,
            @RequestParam(value= "myfile", required = false) MultipartFile file)
{
    

        ContactForm contactForm = new ContactForm();
        contactForm.setName(name);
        contactForm.setEmail(email);
        contactForm.setSubject(subject);
        contactForm.setMessage(message);
    
        // Process the file here (e.g., save it, send as an attachment, etc.)

        emailService.sendContactEmail(contactForm, file);

        return ResponseEntity.ok("Form submitted successfully");
    }
}
