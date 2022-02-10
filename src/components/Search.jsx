import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
    <form className="searchbar" >
        <input
            type="text"
            id="header-search"
            placeholder="Search movies or tv shows"
            name="searchBar"
            size= "75"
        />
        <button type="submit">Search</button>
    </form>
      </div>
    );
  };
};

export default Search;