# Employee Management Dashboard

## Project Description

The Employee Management Dashboard is a web application developed using Angular and TypeScript.
It allows users to manage employee information such as name, role, department, and salary.

The project demonstrates the use of Angular architecture including components, services, routing, forms, directives, pipes, and Angular Material UI components.

---

## Technologies Used

* Angular 17+
* TypeScript
* Angular Material
* HTML & CSS
* Node.js
* Angular CLI

---

## Features

* View employee list
* Add new employee
* View employee details
* Department filtering using custom pipe
* Highlight high-salary employees using custom directive
* Currency formatting using built-in pipe
* Angular Material UI components
* Reactive form with validation
* Routing between pages

---

## Project Structure

src/
├── app/
│   ├── components/
│   │   ├── employee-list
│   │   ├── employee-detail
│   │   ├── employee-form
│   │   └── navbar
│   ├── services/
│   │   └── employee.service.ts
│   ├── pipes/
│   │   └── department-filter.pipe.ts
│   ├── directives/
│   │   └── highlight-salary.directive.ts
│   └── models/
│       └── employee.model.ts

---

## How to Run the Project

1. Install Node.js
2. Install Angular CLI

```
npm install -g @angular/cli
```

3. Install project dependencies

```
npm install
```

4. Run the project

```
ng serve
```

5. Open browser

```
http://localhost:4200
```

---

## Key Angular Concepts Used

* Components
* Services
* Dependency Injection
* Angular Router
* Reactive Forms
* Pipes
* Custom Directives
* Angular Material

---

## Conclusion

This project demonstrates how Angular can be used to build a modular and scalable web application for managing employee data using modern frontend development practices.
