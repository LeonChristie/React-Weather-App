import { useState } from "react";

const Search = ({submitSearch}) => {
    const [place, setPlace] = useState();

    const onSubmit = (e) => {
      submitSearch(place)  
    //   clear entries?
    }

    return (
    <form className="mt-3" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setPlace(e.target.value)}
      />
    </form>
  );
};


export default Search;
