'use client';
import { useEffect, useState } from 'react';
import '../../styles/classes-per-course.css';

export default function ClassesPerCoursePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/statistics/classes-per-course')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading course data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-message">Loading course classes...</div>;
  if (!data || data.length === 0) return <div className="no-data-message">No course data found.</div>;

  return (
    <div className="page-container">
      <h2 className="table-heading">📚 Classes Per Course in Each Year</h2>
      <div className="overflow-x-auto">
        <table className="course-interest-table">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Course Code</th>
              <th className="p-3 border">Course Name</th>
              <th className="p-3 border">Year</th>
              <th className="p-3 border">Semester</th>
              <th className="p-3 border">Available Seats</th>
              <th className="p-3 border">Instructor Name</th>
              <th className="p-3 border">Instructor Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              Object.entries(course.classesByYear).map(([year, classes]) => (
                classes.map((classItem, idx) => (
                  <tr key={`${index}-${idx}`} className="hover:bg-gray-50">
                    {idx === 0 ? (
                      <>
                        <td rowSpan={classes.length} className="p-3 border">{course.courseCode}</td>
                        <td rowSpan={classes.length} className="p-3 border">{course.courseName}</td>
                      </>
                    ) : null}
                    <td className="p-3 border">{year}</td>
                    <td className="p-3 border">{classItem.semester}</td>
                    <td className="p-3 border">{classItem.availableSeats}</td>
                    <td className="p-3 border">{classItem.instructorName}</td>
                    <td className="p-3 border">{classItem.instructorEmail}</td>
                  </tr>
                ))
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
