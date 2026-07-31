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

### Layouts Created

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
- Installed daisyUI for Tailwind CSS.
- Used React Router for page(s) navigation.
- Using useState for login state temporary until Auth Context is created.
- Used a ternary operator to set up condition of whether user is logged in or not.
- Used Navigation from react router dom to have the login page be the default page.
- Added the layout and auth layout components with the current pages that will correspond to the pages using them.

---

### Pages Created

#### **Login.jsx**

Fields: email, password

- Used login page component from daisyUI with a basic form for entering your email and password.
- A link is located at the bottom that will direct you to the registration page if you don't have an account.
- No logic has been added to it yet.

#### **Register.jsx**

Fields: name, email, password

- Used register page component from daisyUI with a basic form for entering your name, email, password.
- Link located at the bottom for those who already have an account and need to login.
- No logic has been added yet.

---

### Components Created

#### **Footer.jsx**

- Used a footer component from daisyUI that has the logo of the website.
- Has the year automated with the basic copyright info which I added.

#### **Header.jsx**

- Used a header component from daisyUI that has the logo and name of the app on the far left while on the far right is the name of the user and a drop down menu with the options of portfolio and logout.
- Currently does not have the logic yet.

#### **Hero.jsx**

- Used a hero component from daisyUI that has a short summary of the project on the left side along with a button at the bottom that will either say "Create Project" or "Edit" depending if a project exists or not.
- An image will be on the right side representing the project.
- No logic added yet.

#### **ThemeController.jsx**

- Used a toggle component from daisyUI that allows you to toggle from light theme to dark theme.
- This will be added with the header component.
- No logic added yet.

---

## June 20, 2026

## Component Created

#### **FABSpeedDial.jsx**

- Used a FAB Speed Dial component from daisyUI that shows additional buttons once clicked and it stays at the bottom right of the screen.
- This will be added to the user's dashboard so that they can create, edit, or delete a project.
- The CSS will be updated for this and all other components once the logic for the frontend has been completed.
- No logic added yet.

---

## July 30, 2026

#### **Homepage.jsx**

- Used the Hero component from daisyUI as the foundation of the Homepage component but modified it to look the way I wanted it to.
- This component will be blank if you haven't created your first project yet.
- If a project already exists, then you'll be able to edit it to continue working on it.
- No logic added yet.
