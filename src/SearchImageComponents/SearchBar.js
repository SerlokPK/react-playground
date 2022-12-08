function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("cars");
  };

  return (
    <div>
      <button onClick={handleClick}>Press me</button>
    </div>
  );
}

export default SearchBar;
