
## Requirements:
### Back-end (Express|NodeJS)
  - Each Todo item have the following properties:
    - ID
    - Text
    - Done or pending

  - One endpoint to provide all the “to do” items to the front-end.
  - Another endpoint can be used to update the “Done or pending” state of any to do item

### Front-end (ReactJS)
  - The application gets all the “to do” items from the back-end API and present it on the screen
  - Each todos show the “Done” or “Pending state”.
  - Clicking on any item update it’s “Done or pending” state.

## Getting Started
>install plugins listed in package.json for client and server using following command
  ```sh
  npm install
  ```
  >run application locally port 5000 (server) and 3000 (client)
```sh
  npm run dev 
  ```

## Directory Structure
 - client (holds react)
 - config (holds persistence and other configs)
 - server (holds backend APIs with Express framework)

Client
src
 ┣ common
 ┃ ┣ reducers.js
 ┃ ┗ store.js
 ┣ modules
 ┃ ┗ Todo
 ┃ ┃ ┣ actions
 ┃ ┃ ┃ ┣ todoActions.js
 ┃ ┃ ┃ ┗ todoActionTypes.js
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ Todo.js
 ┃ ┃ ┃ ┣ TodoAdd.js
 ┃ ┃ ┃ ┣ TodoFilter.js
 ┃ ┃ ┃ ┣ TodoFilterLink.js
 ┃ ┃ ┃ ┣ TodoItem.js
 ┃ ┃ ┃ ┗ TodoList.js
 ┃ ┃ ┗ reducers
 ┃ ┃ ┃ ┗ todoReducers.js
 ┣ styles
 ┃ ┣ bootstrap
 ┃ ┣ img
 ┃ ┃ ┗ background.png
 ┃ ┣ styles.css
 ┣ App.js
 ┣ index.js
Server
 ┣ common
 ┃ ┗ utils.js
 ┣ config
 ┃ ┣ data.json
 ┃ ┣ dev.js
 ┃ ┗ index.js
 ┣ todo
 ┃ ┣ index.js
 ┃ ┗ todo.js
 ┗ todo-app.js
server.js

## Features
 - List All Todos
 - Add a Todo
 - Check/Uncheck a todo
 - Delete a Todo
 - Filter All, Active, Completed
## Libraries Used
 - react, react-bootstrap, react-redux, redux, redux-thunk etc. (client)
 - express, config, compression, nanoid etc. (server)
 - mocha && chai (test)

## API Calls (// endpoints to be updated later)
 - GET all todos --> /todo/
 - Add --> /todo/new
 - Toggle completed --> /todo/:todoId/toggle
 - Delete --> /todo/:todoId/delete
 - Get a todo with id --> /todo/:todoId

>Author : Gaurav Kaushik