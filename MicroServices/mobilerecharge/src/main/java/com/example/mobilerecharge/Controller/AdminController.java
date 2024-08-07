package com.example.mobilerecharge.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.Model.Admin;
import com.example.mobilerecharge.Model.Support;
import com.example.mobilerecharge.Service.AdminService;
import com.example.mobilerecharge.Service.SupportService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private SupportService supportService;

    @PostMapping("/adminpage")
    public String postMethodName(@RequestBody Admin admin) {
        adminService.saveadmin(admin);
        return "Game on";
    }

    @GetMapping("/admin")
    public Admin getMethodName(@RequestParam String email) {
        return adminService.getbyemail(email);
    }

    @GetMapping("/getquerynotification")
    public List<Support> getMethodName() {
        return supportService.getallquery();
    }

}
