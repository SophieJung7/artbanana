import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form className="form_search mt-3">
          <input
            id="query search-autocomplete"
            type="search"
            placeholder="스냅사진을 원하는 지역을 검색해주세요."
            className="nav-search nav-search-field"
          />
          <button type="submit" name="nav-submit-button" className="btn-search">
            <FaSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
