package com.example.employee_management.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import com.example.employee_management.entity.Employee;
import com.example.employee_management.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:3000"
})

public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/{empno}")
    public Employee getEmployeeById(
            @PathVariable Long empno) {
        return service.getEmployeeById(empno);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee createEmployee(
            @Valid @RequestBody Employee employee) {
        return service.createEmployee(employee);
    }

    @PutMapping("/{empno}")
    public Employee updateEmployee(
            @PathVariable Long empno,
            @Valid @RequestBody Employee employee) {
        return service.updateEmployee(empno, employee);
    }

    @DeleteMapping("/{empno}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEmployee(
            @PathVariable Long empno) {
        service.deleteEmployee(empno);
    }
}