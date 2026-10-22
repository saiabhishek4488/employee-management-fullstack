# Employee Management System — Full Stack

A full-stack web application to manage employee records using Spring Boot for the backend and React for the frontend.

## Technologies Used

**Backend**
- Java
- Spring Boot
- Spring Data JPA / Hibernate
- REST APIs
- Maven

**Frontend**
- React.js
- JavaScript
- Axios
- HTML and CSS

**Database**
- MySQL (if used in your project)

## Features

- Create new employee records
- View the list of employees
- Update employee details
- Delete employee records
- Connect the React frontend to backend REST APIs using Axios

## Project Structure

```text
employee-management-fullstack/
├── backend/
│   └── employee-management/
│       ├── src/
│       └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
├── .gitignore
└── README.md
```

## How to Run the Project

### 1. Start the Backend

Open the backend project in your Java IDE and run the Spring Boot application.

Make sure your database is configured correctly in `application.properties`.

### 2. Start the Frontend

Open a terminal inside the `frontend` folder and run:

```bash
npm install
npm start
```

The React application will start in your browser.

## Project Goal

To demonstrate full-stack development by integrating a React user interface with Spring Boot REST APIs for employee management.
