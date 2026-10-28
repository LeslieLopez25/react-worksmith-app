# Worksmith: Frontend — Developer Log

A personal devlog documenting the building process of Worksmith, an all-in-one project documentation tool for developers, designers, animators, and creators of any kind.

---

## June 06, 2026

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

## October 02, 2026

- Added Loading component to app.jsx.

## October 18, 2026

- Updated the routes and added useAuth hook to file.
- Added ProtectedRoute to routes where user must be authorized to access.

## October 24, 2026

- Added dynamic project route to App.jsx.

#### **main.jsx**

- Added the function for Loading component to set the theme color to whatever the user has set.

## October 18, 2026

- Added AuthProvider to main to pass AuthContext.

---

### Pages Created

#### **Login.jsx**

Fields: email, password

- Used login page component from daisyUI with a basic form for entering your email and password.
- A link is located at the bottom that will direct you to the registration page if you don't have an account.
- No logic has been added to it yet.

## Updated September 30, 2026

- Added mobile design to login screen.

## Updated October 16, 2026

- Added logic to login page to connect to the backend and to let an existing user login to their account.
- Added toast component to login page.

## October 20, 2026

- Updated Login's CSS.

#### **Register.jsx**

Fields: name, email, password

- Used register page component from daisyUI with a basic form for entering your name, email, password.
- Link located at the bottom for those who already have an account and need to login.
- No logic has been added yet.

## September 30, 2026

- Added mobile design to register screen.

## October 15, 2026

- Added logic to the register page where it now connects to the backend.

## October 16, 2026

- Added the logic to connect to the backend and a new user can register or if user already exists, an error message is sent back from the backend to let the individual know.
- Added toast to register page.

## October 22, 2026

- Fixed the logic in register page so that after successful registration, user is redirected to home page instead of login.

---

## July 30, 2026

#### **Homepage.jsx**

- Used the Hero component from daisyUI as the foundation of the Homepage page but modified it to look the way I wanted it to.
- This page will be blank if you haven't created your first project yet.
- If a project already exists, then you'll be able to edit it to continue working on it.
- No logic added yet.

## October 01, 2026

- Added mobile design to the home page.

## September 17, 2026

- Created a layout to show projects on the home page.
- A boolean has been created to show projects if there are projects and to show a message if there are no projects and a create projects button.

## October 24, 2026

- Added logic to the home page by using useEffect to fetch all projects on page loading using getAllProjects from projectAPI.js.
- Loading state shows spinner while projects are being fetched.
- hasProjects is now derived from actual data instead of hardcoded boolean.
- Each project card navigates to /project/${project.\_id} when clicked.
- project.images?.[0]?.url shows the first image if one exists, falls back to placeholder.
- key={project.\_id} uses the real MongoDB ID instead of the array index.
- Added a function to change the color of the tags for the projectType using a case function.

#### **Project.jsx**

- Used the Textarea component from daisyUI which is the main part of where the notes will be created in the middle of the main page.
- The Textarea component has the ImageCard component on both the right side and left side of it.
- There is a save button at the bottom of the textarea component which you can save your notes.
- The notes and image card section is the left column while the right column is the task board which lets you keep track of how much progress you've made on your project.
- The task board will be styled similar to a kanban board but there will be some differences and the task board will have more functions once the logic is created.
- No logic added yet.

## October 27, 2026

- Added logic to the project page so that notes can be created, saved, and delete.
- Logic to be able to delete the project itself.
- Logic created to be able to save an image or update an image.
- Logic added to the activeTab state so that it shows which tab is active, Image Card or Notes.

## September 23, 2026

- Added another modal only this time it is for editing/deleting the image cards in the project file.
- No logic added yet.

## October 08, 2026

- Added mobile design to edit/delete modal.

## October 11, 2026

- Added mobile design to the project page itself.

---

## August 23, 2026

#### **TaskBoard.jsx**

- Created a task board that is meant to be similar to a kanban board.
- Each card will have a title, a description, and 2 tags; 1 for level of urgency and the other for the type of card that it is (frontend, backend, etc.,).
- No logic added yet.

## August 15, 2026

- Made the Task Board heading into a link to give access to the actually full page of the task board.

## September 11, 2026

- Added another column called "Blocked" for tasks that can't be completed at the moment.
- Created a "Create Task" modal for creating tasks, giving level of urgency, and the type of task it is.

## October 08, 2026

- Added mobile design to the task creation modal.

## October 09, 2026

- Added mobile design to the task board modal.

---

## August 27, 2026

#### **CreateProject.jsx**

- Created a page for creating your projects similar to the design of when your creating articles for blogs.
- The page will only appear when your creating your project for the first time and from there you can update and edit your project from the project page.
- No logic added yet.

## October 04, 2026

- Added mobile design for the create project page.

## October 24, 2026

- formData state tracks title, description, status and projectType.
- Status and project type radio button are now controlled -- they update formData when selected and the Publish card shows the currently selected status.
- handleSubmit handles both Save Draft and Create Project -- the draft boolean differentiates them.
- Title is required -- shows and error toast if empty.
- After successful creation navigate to the new project's page using the returned \_id.
- Status and project type options use .map() so adding new options is just adding to the arrays at the top.

---

## September 03, 2026

#### **Profile.jsx**

- Created a profile page for the user with basic functions.
- There is a section for the user to update their name and email address.
- There is a section for the user to change their password.
- There is a danger zone for when you want to delete your account.
- There will be a modal that will appear if you choose to delete your account asking you to type something out if you are certain that you want to delete your account.
- No logic added at the moment.

## October 07, 2026

- Added mobile design to profile page.

## October 21, 2026

- Added logic to the profile page that handles updating account info, updating password, changing password, using the user's initials for the avatar, and deleting the account.
- The handles were then applied to the divs that corresponded to them.

## October 22, 2026

- Added logic to call updateUser after successful account update.

---

## September 17, 2026

#### **NotFound.jsx**

- Created a 404 page for pages that don't exist.
- Custom made with a simple design and buttons that lead back to projects or to create a new project.
- There is also an animated red tab that reads "Page not found" to make it clear that it is an error page.
- Logic not yet added.

## October 01, 2026

- Added mobile design to the 404 page.

## September 04, 2026

#### **ImageCardForm.jsx**

- Created image card form page that lets you add an image that shows your current progress, a title, and a short description for the image.
- There is also a save button at the header as well as a preview button that opens a modal that lets see what the image card will look like before you save it.
- No logic added at the moment.

## October 27, 2026

- Created logic for the image card so that an image, its title, and its description are passed through.
- Through the image card form it can be updated.

## October 08, 2026

- Added mobile design to image card form.

### Components Created

#### **Footer.jsx**

- Used a footer component from daisyUI that has the logo of the website.
- Has the year automated with the basic copyright info which I added.

## October 01, 2026

- Added mobile design to footer.

## October 02, 2026

- Updated the CSS for the footer.

#### **Header.jsx**

- Used a header component from daisyUI that has the logo and name of the app on the far left while on the far right is the name of the user and a drop down menu with the options of portfolio and logout.
- Currently does not have the logic yet.

## October 01, 2026

- Added mobile design to header.

## October 20, 2026

- Create a handleLogout function to Header.

#### **Hero.jsx**

- Used a hero component from daisyUI that has a short summary of the project on the left side along with a button at the bottom that will either say "Create Project" or "Edit" depending if a project exists or not.
- An image will be on the right side representing the project.
- No logic added yet.

## October 03, 2026

- Added mobile design for hero page.

#### **ThemeController.jsx**

- Used a toggle component from daisyUI that allows you to toggle from light theme to dark theme.
- This will be added with the header component.

## September 27, 2026

- Finished setting up the light theme for the project.
- Had to make a few adjustments for the light theme to go through the project such as adding borders for certain sections and such.

## September 29, 2026

- Finished setting up the dark theme for the project.
- Few adjustments had to be fixed for the dark theme on a few pages.

## September 30, 2026

- Updated the theme controller so that when the user is changing pages and they have dark theme active, it stays on dark theme and not switch back to light theme.
- Added to useEffect localStorage to save the user's preferred theme.

## October 01, 2026

- Updated theme controller by adding a customized size for the icons and a statement whether the screen was compact or not.

---

## June 20, 2026

## Components Created

#### **FABSpeedDial.jsx**

- Used a FAB Speed Dial component from daisyUI that shows additional buttons once clicked and it stays at the bottom right of the screen.
- This will be added to the user's dashboard so that they can create, edit, or delete a project.
- The CSS will be updated for this and all other components once the logic for the frontend has been completed.
- No logic added yet.

## October 01, 2026

- I went ahead a deleted this as I made new adjustments to the app.

---

## August 07, 2026

#### **Loading.jsx**

- Used the Loading component from daisyUI to create the loader.
- No logic added yet.

## October 02, 2026

- Added mobile design to Loading component.
- Added it to app.jsx.

## August 14, 2026

#### **ImageCard.jsx**

- Used the Card component from daisyUI to create the image card component where an image can be added to show how much you've progressed on your project, of something you want to add to your project, etc., and a title for the image as well as a short description for the image.
- This will be connected to the project page itself.
- No logic added yet.

## October 07, 2026

- Added mobile design to image card component.

## October 16, 2026

#### **Toast.jsx**

- Created Toast component for alerts of success and error.
- Added logic for the toast component.

## October 18, 2026

#### **ProtectedRoute.jsx**

- Created protected route file to protect a user's info and not allow an unauthorized user to try and access a protected URL.

---

### API Created

#### **axios.jsx**

- Created axios instance file so that the url would not need to be hardcoded and for when I connect to AWS, it won't break.

## October 24, 2026

#### **projectAPI.jsx**

- Created projectAPI to keep all project API calls in one place.

## October 27, 2026

-Create tasksAPI to keep all the tasks API calls in one place.

---

## October 16, 2026

## Hooks Created

#### **useToast.jsx**

- Created custom hook to manage toast state so that it can be used anywhere.

## October 18, 2026

#### **useAuth.jsx**

- Created useAuth hook to pass the AuthContext.

---

## October 18, 2026

## Context Created

#### **AuthContext.jsx**

- Created AuthContext to pass user authentication globally.

## October 20, 2026

- There was an issue with AuthContext due to there being another React function so a new file was created just for the AuthProvider to be in and the AuthContext in another file.
- Had to also go to other files that had AuthContext and update those with AuthProvider.

## October 22, 2026

#### **AuthProvider**

- Added logic of updateUser so that it updates the user state directly.
