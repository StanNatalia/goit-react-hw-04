import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter a search term", { duration: 2000 });
      return;
    }
    handleSetQuery(value);
    setValue("");
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeValue}
          value={value}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
