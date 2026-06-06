# Worksmith: Frontend — Developer Log

A personal devlog documenting the building process of Worksmith, an all-in-one project documentation tool for developers, designers, animators, and creators of any kind.

---

## June 6, 2026

### Project Kickoff

Started this project as a simple private blog for tracking coding projects. Over the course of planning, the scope evolved into something broader — a full-stack project documentation tool for anyone who needs to track their work, progress, and ideas in one place.

---

### Frontend Setup

Initialized the frontend with the following stack:

-- **Framework** React JS
-- **CSS** Tailwind CSS

---

### Layout Created

#### **Layout.jsx**

Components used: Header.jsx and Footer.jsx

Key decisions:

- Made it easier to have the Header and Footer on certain pages.
- Outlet used as a placeholder for these components.

### **AuthLayout.jsx**

Components used: Footer.jsx

Key decisions:

- Made a second layout component for the Register.jsx and Login.jsx pages.
- Only the Footer component would be seen and not the Header component.
- Outlet used as a placeholder for Footer component.

### Setting Main Page

#### **App.jsx**

- Removed App.css file and kept only the index.css file for Tailwind CSS setup.
- Used React Router for 
