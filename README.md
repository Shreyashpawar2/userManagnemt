
User Management System
Introduction
This project is a User Management System implemented in Angular, featuring a user module with user creation, listing, and editing functionalities. The application also incorporates validation, data passing between components, and basic styling.

Setup Instructions 

Clone the repository:
https://github.com/Shreyashpawar2/userManagnemt.git 

Navigate to the project directory:
cd userManagnemt

Install dependencies:
npm install

Run the application:
ng serve

1. User Module
1.1 User-Upsert Component
The User-Upsert component allows users to add or edit user information through a reactive form. Validation rules ensure data integrity.

1.1.1 Form Fields
FirstName (Required)
LastName (Required)
Address (Required)
Email (Required, Email Validation)
Phone (Required, 10-digit number)
1.1.2 User-List Component
The User-List component displays a grid of users, including their name, email, phone, and actions (Edit and Delete).

1.2 Validation
A check for existing users is implemented, and an "already exists" message is displayed if a duplicate is detected.

1.3 Data Passing
The DataService is used to pass selected user information between the User-List and User-Upsert components. It also triggers a refresh of the user list after additions or updates.

1.4 Styling
The application utilizes Angular Material for basic styling, providing a visually appealing user interface.

![Alt Text](https://github.com/Shreyashpawar2/userManagnemt/assets/97426822/e2d190c3-f9f5-4a5f-b461-976a543196c7)

![Alt Text](https://github.com/Shreyashpawar2/userManagnemt/assets/97426822/1682e30d-e7f0-4ff6-8a0f-d3f03bacdda1)
![Alt Text](https://github.com/Shreyashpawar2/userManagnemt/assets/97426822/aeff5f93-155e-4461-915f-ed553809b676)
![Alt Text](https://github.com/Shreyashpawar2/userManagnemt/assets/97426822/3ae320df-1010-41b5-bf32-7defb461282c)
![Alt Text](https://github.com/Shreyashpawar2/userManagnemt/assets/97426822/fd349f64-0038-4167-80ce-dc13681b5297)

![Alt Text](https://github.com/Shreyashpawar2/userManagnemt/assets/97426822/c1285b69-140f-4a2c-a0c8-ee4ecb998b25)


