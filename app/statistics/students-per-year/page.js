'use client';
import React, { useEffect, useState } from 'react';
import '../../styles/StudentsPerYear.css';

export default function StudentsPerYear() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchStudentsData() {
      const res = await fetch('/api/statistics/students-per-year');
      const students = await res.json();
      setData(students);
    }

    fetchStudentsData();
  }, []);

  return (
    <div className="students-per-year-container">
      <h2>Students Per Year (With Semesters)</h2>
      {data.length > 0 ? (
        <table className="students-per-year-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Semester</th>
              <th>No. of Students</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.year}</td>
                <td>{entry.semester}</td>
                <td>{entry.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
