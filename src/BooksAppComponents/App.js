import { useState } from "react";
import BookCreate from "./BookCreate";

function App() {
  const [book, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Add book with", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
