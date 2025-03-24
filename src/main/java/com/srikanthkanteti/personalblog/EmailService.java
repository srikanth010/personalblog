package com.srikanthkanteti.personalblog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(ContactForm form, MultipartFile file) {
       MimeMessage mimeMessage = mailSender.createMimeMessage();

    try {
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom("srikanth@srikanthkanteti.com");
        helper.setTo("srikanth@srikanthkanteti.com");
        helper.setSubject("New Contact Request from " + form.getName());
        helper.setText("Subject: " + form.getSubject() + "\nEmail: " + form.getEmail() + "\nMessage: " + form.getMessage());

        if (!file.isEmpty()) {
            helper.addAttachment(file.getOriginalFilename(), file);
        }

        mailSender.send(mimeMessage);
    } catch (Exception e) {
        e.printStackTrace();
        // Handle exceptions appropriately
    }
}
    
}
