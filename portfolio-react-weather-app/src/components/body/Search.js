import { useState } from "react";

const Search = ({ submitSearch }) => {
  const [place, setPlace] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    submitSearch(place);
  };

  return (
    <form className="mt-3" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setPlace(e.target.value)}
        className="fs-2"
      />
    </form>
  );
};

export default Search;
