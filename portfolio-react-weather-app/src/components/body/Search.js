import { useState } from "react";

const Search = ({ submitSearch }) => {
  const [place, setPlace] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    submitSearch(place);
  };

  return (
    <form className="search mt-4" onSubmit={onSubmit}>
      <input
        id="seachInput"
        type="text"
        placeholder="Search"
        onChange={(e) => setPlace(e.target.value)}
        className="fs-2"
      />
    </form>
  );
};

export default Search;
