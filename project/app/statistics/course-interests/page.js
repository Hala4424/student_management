'use client';
import { useEffect, useState } from 'react';
import '../../styles/course-interests.css';

export default function PublishedCoursesInterestPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/statistics/course-interests')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading interest data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-message">Loading published course interests...</div>;
  if (!data || data.length === 0) return <div className="no-data-message">No instructor interests found.</div>;

  return (
    <div className="page-container">
      <h2 className="table-heading">📚 Published Courses with Instructor Interests</h2>
      <div className="overflow-x-auto">
        <table className="course-interest-table">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Course Code</th>
              <th className="p-3 border">Course Name</th>
              <th className="p-3 border">Semester</th>
              <th className="p-3 border">Year</th>
              <th className="p-3 border">Deadline</th>
              <th className="p-3 border">Interested Instructors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border">{course.courseCode}</td>
                <td className="p-3 border">{course.courseName}</td>
                <td className="p-3 border">{course.semester}</td>
                <td className="p-3 border">{course.year}</td>
                <td className="p-3 border">
                  {new Date(course.deadline).toLocaleDateString()}
                </td>
                <td className="p-3 border">
                  <ol className="list-disc pl-4">
                    {course.interestedInstructors.map((inst, i) => (
                      <li key={i}>
                        {inst.name} ({inst.email}) -{' '}
                        <span className="text-blue-600">{inst.interestStatus}</span>
                      </li>
                    ))}
                  </ol>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
