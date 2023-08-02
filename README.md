# Todo App

This is a todo app built with React.

## Contents

The project contains the following files:

### `App.jsx`

This contains the main App component which renders the header, navigation, todo list, and additional tools.

Key components:

- Header
- Navigation 
- TodoList
- Todo
- Tip
- AdditionalTools

It handles state for the todos and theme.

### `App.test.js`

Basic smoke test for App component.

### `index.js` 

Entry point that renders App component.

### `input.css`

Stylesheet for the app. Contains styles for:

- Custom checkboxes
- General styling 
- Navigation
- Todo list
- Additional tools 
- Header
- Responsiveness

### Theming

The app supports light and dark themes which are persisted in localStorage.

## Usage

The standard Create React App scripts are available:

## Technologies  

Runs the app in development mode.

### `npm test` 

Launches the test runner.

- `todos` - Array of todo objects with `note` and `isChecked` properties
- `text` - Input value for new todo text

Builds the app for production to the `build` folder.