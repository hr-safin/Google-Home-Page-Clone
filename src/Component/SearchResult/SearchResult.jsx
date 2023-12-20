import React from "react";
import { FaClockRotateLeft } from "react-icons/fa6";

const SearchResult = ({ searchResult }) => {
  // Log the search result data for debugging
  console.log(searchResult);

  return (
    <div className="flex flex-col gap-2 pt-4">
      {/* Map through the first 4 search results and display them */}
      {searchResult.slice(0, 4).map((item, index) => (
        // Using React.Fragment as a shorthand for <>
        <React.Fragment key={index}>
          {/* Open search result link in a new tab */}
          <a
            target="_blank"
            href={item.link}
            className="cursor-pointer hover:bg-gray-200 p-2 flex items-center gap-4"
          >
            {/* Clock icon */}
            <span className="text-gray-500 text-sm">
              <FaClockRotateLeft />
            </span>
            {/* Display the search result title */}
            <h2 className="text-sm text-gray-500">{item.title}</h2>
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SearchResult;
