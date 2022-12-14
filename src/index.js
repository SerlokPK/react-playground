// 1) Import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/BooksAppComponents/index.css";

//import App from "./StaticAppComponents/App";
//import App from "./AnimalsAppComponents/App";
//import App from "./SearchImageComponents/App";

import App from "./BooksAppComponents/App";
import { Provider } from "./BooksAppComponents/context/books";

// 2) Get a reference to the div with ID root
const element = document.getElementById("root");

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(element);

// 4) Show the component on the sceen
root.render(
  <Provider value={5}>
    <App />
  </Provider>
);
