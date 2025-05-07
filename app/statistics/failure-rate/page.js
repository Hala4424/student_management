'use client';
import { useEffect, useState } from 'react';
import '../../styles/failure-rate.css';

export default function FailureRatePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/statistics/failure-rate')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch failure rate:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-6 text-lg font-semibold">Loading Failure Rate...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-center py-6 text-gray-500">No failure rate data available.</div>;
  }

  return (
    <div className="failure-rate-page px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-red-700">📉 Course Failure Rate Overview</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-red-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">📘 Course Code</th>
              <th className="px-4 py-3 border-b">📖 Course Name</th>
              <th className="px-4 py-3 border-b">✅ Completed</th>
              <th className="px-4 py-3 border-b">❌ Failures</th>
              <th className="px-4 py-3 border-b text-red-600">📉 Failure Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr
                key={course.courseCode + index}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 border-b">{course.courseCode}</td>
                <td className="px-4 py-2 border-b">{course.courseName}</td>
                <td className="px-4 py-2 border-b">{course.totalCompleted}</td>
                <td className="px-4 py-2 border-b">{course.totalFailures}</td>
                <td className="px-4 py-2 border-b text-red-600 font-medium">{course.failureRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
