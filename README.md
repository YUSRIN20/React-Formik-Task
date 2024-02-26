# Library Book Management Application

The Book Management Application is designed to help users manage and organize their collection of books. It provides a user-friendly interface for performing various operations such as viewing, editing, creating, and deleting book entries.

## Table of Contents

- [Library Book Management Application](#library-book-management-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [API Endpoint](#api-endpoint)
  - [Contributing](#contributing)
  - [License](#license)

## Features

1. **View All Books**: Users can see a list of all the books currently stored in the application. Each book entry displays key information such as title, author, publish year, and publisher.

2. **Edit Book**: Users have the ability to edit the details of existing books. This includes modifying fields such as the title, author, publish year, publisher, and description.

3. **Create Book**: Users can add new books to their collection by providing details such as the title, author, publish year, publisher, and description. This allows for easy expansion of the book catalog.

4. **View Book Details**: Users can access detailed information about a specific book by selecting it from the list. This detailed view includes additional information such as the book's description and ISBN.

5. **Delete Book**: Users can remove unwanted book entries from their collection. This feature helps keep the book catalog organized and clutter-free.

## Technologies Used

- **React**: The application is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture makes it easy to create reusable UI elements.

- **React Router**: React Router is used for client-side routing, enabling navigation between different pages within the application.

- **Axios**: Axios is a promise-based HTTP client used for making requests to the API endpoints. It simplifies the process of fetching and sending data to the server.

- **React Toastify**: React Toastify is used for displaying user-friendly notifications such as success messages for successful operations and error messages for failed operations.

- **Yup**: Yup is a JavaScript schema validation library used for validating user input. It ensures that the data entered by users meets certain criteria, helping maintain data integrity.


## Setup Instructions

1. **Clone the repository**: Use `git clone https://github.com/yourusername/book-management-app.git` to clone the repository to your local machine.
2. **Navigate to the project directory**: Use `cd book-management-app` to move into the project directory.
3. **Install dependencies**: Run `npm install` to install all necessary dependencies.
4. **Start the development server**: Use `npm start` to start the development server.
5. **Access the application**: Open your web browser and visit `http://localhost:3000` to access the application.

## API Endpoint

The application interacts with a mock API to fetch and update book details. The provided API endpoint is used for CRUD (Create, Read, Update, Delete) operations on book data.

## Contributing

Contributions to the Book Management Application are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for more details.

