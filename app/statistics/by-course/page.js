'use client';
import { useEffect, useState } from 'react';
import '../../styles/by-course.css';

export default function ByCoursePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/statistics/by-course')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch course data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-8 text-lg">Loading Courses...</div>;
  if (!data) return <div className="text-center mt-8 text-red-600">Failed to load data.</div>;

  return (
    <div className="by-course-page p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Courses Overview</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Course Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Instructor</th>
              <th className="py-3 px-4 text-left">Enrolled Students</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 font-medium">{course.name}</td>
                <td className="py-2 px-4">{course.category}</td>
                <td className="py-2 px-4">{course.instructor}</td>
                <td className="py-2 px-4">{course.studentsEnrolled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
