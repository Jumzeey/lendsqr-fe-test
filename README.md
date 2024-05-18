# Lendsqr Frontend Assessment

This project was developed as part of a frontend job assessment for Lendsqr. The application is built using React, SCSS, and TypeScript, with Axios for API calls and Mocky.io for generating JSON data. Vite is used as the build tool.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Services](#services)
- [Hooks](#hooks)
- [Utils](#utils)
- [Data](#data)
- [Types](#types)
- [Styling](#styling)
- [Components](#components)
- [Local Storage](#local-storage)

## Features
- Design and responsiveness with SCSS
- API handling using Axios
- Data generation with Mocky.io
- Various React features and best practices

## Project Structure
The project is organized as follows:

```
src/
|-- _auth/              # Authenticated users layout (for sign in and sign up pages)
|-- _root/              # Sudo Authenticated users layout (for dashboard and other pages)
|-- assets/              # all images file
|-- components/         # Reusable UI components (inputs, search bars, buttons, cards, tables, navbar, sidebar)
|-- lib/
|   |-- data/           # Large data sets (e.g., sidebar navigation items)
|   |-- hooks/          # Custom hooks for API logic and data reusability
|   |-- sass/           # Global styles, fonts, and colors
|   |-- services/       # Utility services for date, currency, and text formatting
|   |-- types/          # TypeScript interfaces and types
|   |-- utils/          # API configuration (axios instance)
|-- pages/              # Main page components (e.g., user details page)
|-- App.tsx             # Main application component
|-- main.tsx            # Application entry point
```

## Installation
Follow these steps to set up the codebase locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/lendsqr-frontend-assessment.git
   cd lendsqr-frontend-assessment
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run serve
   ```

## Usage
After installing the dependencies and running the development server, you can view the application in your browser at `http://localhost:3000`.

## Screenshots

1. **Sign In Page**
   ![Home Page](/src/assets/screenshots/signin-page-desktop.app.png)

2. **User Details Page**
   ![User Details Page](/src/assets/screenshots/User-details-desktop.png)

3. **Dashboard**
   ![Navigation Sidebar](/src/assets/screenshots/user-page-desktop.png)

4. **Dashboard Mobile**
   ![Home Page](/src/assets/screenshots/user-page-mobile.app.png)

5. **Sign In Page Mobile**
   ![Home Page](/src/assets/screenshots/signin-page-mobile.app.png)

6. **User Details Page Mobile**
   ![Home Page](/src/assets/screenshots/user-details-mobile.png)

7. **Dashboard with Modals**
   ![Home Page](/src/assets/screenshots/Userpage-with-filter-modal.png)

## Services
Utility services for date, currency, and text formatting can be found in `src/lib/services/index.tsx`.

## Hooks
Custom hooks for API logic and data reusability are located in `src/lib/hooks/index.tsx`.

## Utils
API configuration is stored in the `axiosInstance` file located at `src/lib/utils/axiosInstance.ts`.

## Data
Large sets of data, such as navigation items, are stored in JSON format in `src/lib/data/sidebarData.json`.

## Types
TypeScript interfaces and types are stored in `src/lib/types/index.tsx`.

## Styling
Global styles, including fonts and colors, are stored in SCSS files located in `src/lib/sass`.

## Components
Reusable UI components such as inputs, search bars, buttons, cards, tables, navbar, and sidebar are created in the `src/components` directory.

## Local Storage
User details data is stored in local storage and extracted to be displayed on the user details page.

