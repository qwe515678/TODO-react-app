# React TODO App

This is a simple TODO app built with React. 

## Features

- Add new TODOs
- Mark TODOs as complete  
- Delete completed TODOs
- TODOs are saved in localStorage

## Technologies  

- React
- React Hooks (useState, useEffect)
- Tailwind CSS for styling

## Components

- `App` - Main component that renders the whole app
- `TodoList` - Renders a list of Todo components 
- `Todo` - Renders a single todo
- `Navigation` - Contains the input and button to add new todos
- `AdditionalTools` - Contains button to delete completed todos

## State  

- `todos` - Array of todo objects with `note` and `isChecked` properties
- `text` - Input value for new todo text

## Local Storage

On mount, app checks `localStorage` for any existing todos and sets state.

On todo changes, state is stringified and saved to `localStorage`. 

## Styling

Tailwind CSS is used for styling along with some custom CSS.

Styles are imported in `index.css` and `input.css`.

## Usage  

- `npm install` to install dependencies
- `npm start` to run dev server  
- `npm run build` to create production build

Let me know if you would like me to explain or expand on anything!