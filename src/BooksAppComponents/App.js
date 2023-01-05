import BookCreate from "./BookCreate";
import BookList from "./BookList";

function App() {
  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
