'use client';
import { useEffect, useState } from 'react';
import '../../styles/average-grades.css';

export default function AverageGradesPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/statistics/average-grades')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch average grades:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Average Grades...</div>;
  }

  if (!data) {
    return <div>Failed to load data.</div>;
  }

  return (
    <div className="average-grades-page">
      <h2 className="text-2xl font-bold mb-4">📊 Average Grades per Course</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300">Course Name</th>
            <th className="px-4 py-2 text-left border border-gray-300">Average Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{entry.courseName}</td>
              <td className="px-4 py-2">{entry.averageGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
