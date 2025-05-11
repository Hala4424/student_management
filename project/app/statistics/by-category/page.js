'use client';
import { useEffect, useState } from 'react';
import '../../styles/by-category.css';

export default function ByCategoryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/statistics/by-category')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch courses by category:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Course Categories...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No course category data available.</div>;
  }

  return (
    <div className="by-category-page px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">📊 Courses By Category</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-blue-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">📂 Category</th>
              <th className="px-4 py-3 border-b">📘 Total Courses</th>
              <th className="px-4 py-3 border-b">👥 Students Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {data.map((category, index) => (
              <tr
                key={category.category}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 border-b">{category.category}</td>
                <td className="px-4 py-2 border-b">{category.totalCourses}</td>
                <td className="px-4 py-2 border-b">{category.totalStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
