import { useState } from "react";

function CourseSearch({ getSearchResults }) {
  const [query, setQuery] = useState("");
  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/courses/search?query=${query}`);
    const courses = await response.json();
    getSearchResults(courses);
  };
  return (
    <form onSubmit={handelSubmit} className=" search-form">
      <input
        type="text"
        placeholder="Search Courses.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default CourseSearch;
