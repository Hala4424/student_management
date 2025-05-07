'use client';
import { useEffect, useState } from 'react';
import '../../styles/by-course.css';

export default function TopCoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/statistics/top-courses')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="top-courses-container">
      <h2 className="section-title">Top Enrolled Courses</h2>
      <table className="top-courses-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Name</th>
            <th>Total Students</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
