package com.example.employee_management.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.employee_management.entity.Employee;
import com.example.employee_management.repo.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee getEmployeeById(Long empno) {
        return repository.findById(empno)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Employee not found"
            ));
    }

    public Employee createEmployee(Employee employee) {
        employee.setEmpno(null);
        return repository.save(employee);
    }

    public Employee updateEmployee(
            Long empno, Employee details) {

        Employee employee = getEmployeeById(empno);

        employee.setPassword(details.getPassword());
        employee.setFirstname(details.getFirstname());
        employee.setLastname(details.getLastname());

        return repository.save(employee);
    }

    public void deleteEmployee(Long empno) {
        Employee employee = getEmployeeById(empno);
        repository.delete(employee);
    }
}