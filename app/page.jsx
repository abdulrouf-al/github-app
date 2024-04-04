"use client";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import { useState, useEffect } from "react";
import LoadingPage from "./Loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);
  /* console.log(courses);
   */
  if (loading) return <LoadingPage />;
  return (
    <>
      <h1> Welcome to our course platform!</h1>
      <CourseSearch
        getSearchResults={(results) => {
          setCourses(results);
        }}
      />
      <Courses courses={courses} />
    </>
  );
};
export default HomePage;
