import React from "react";
import './SearchResultLists.css'
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results && results.length > 0 ? (
        results.map((result, id) => (
          <SearchResult result={result.name} key={id} />
        ))
      ) : (
        <div className="no-results-message">No user found</div>
      )}
    </div>
  );
};
