"use client";
import { useEffect, useState } from "react";
import React from "react";

import "../../styles/instructor-stats.css";

export default function InstructorStatsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/statistics/instructor-stats")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch instructor data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Instructor Stats...</div>;
  }

  if (!data) {
    return <div>Failed to load data.</div>;
  }

  return (
    <div className="instructor-stats-page">
      <h2 className="text-2xl font-bold mb-6">
        👨‍🏫 Instructor Statistics Overview
      </h2>
      <div className="overflow-x-auto">
        <table className="stats-table w-full border-collapse">
        <thead>
        <tr key={`head-1`} className="bg-green-200 text-left">
          <th key={`sub-head-1`} className="p-3 border" rowSpan={2}>Instructor Name</th>
          <th key={`sub-head-2`} className="p-3 border" rowSpan={2}>In-Progress Classes</th>
          <th key={`sub-head-3`} className="p-3 border" rowSpan={2}>Completed Classes</th>
          <th key={`sub-head-4`} className="p-3 border" rowSpan={2}>Un-Approved Classes</th>
          <th key={`sub-head-5`} className="p-3 border" rowSpan={2}>Total Classes</th>
          <th key={`sub-head-6`} className="p-3 border" rowSpan={2}>Students Enrolled</th>
          <th key={`sub-head-7`} className="p-3 border" rowSpan={2}>Students Completed</th>
          <th key={`sub-head-8`} className="p-3 border text-red-600 font-medium text-left">✅Passed</th>
        </tr>
        <tr key={`head-2`} className="bg-green-100 text-left">
          <th  key={`sub-head-9`} className="p-3 border text-red-600 font-medium">❌Failed</th>
        </tr>
      </thead>


          <tbody>
            {data.map((instructor, index) => (
               <React.Fragment key={`fragment-${index}`}>
                <tr
                  key={`main-${index}`}
                  className="bg-white hover:bg-green-50"
                >
                  <td key={`${instructor.name}-name-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.name}
                  </td>
                  <td key={`${instructor.inProgressClasses}-classes-in-progress-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.inProgressClasses}
                  </td>
                  <td key={`${instructor.completedClasses}-completed-classes-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.completedClasses}
                  </td>
                  <td key={`${instructor.totalCourses}2-total-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.totalCourses-(instructor.inProgressClasses+instructor.completedClasses)}
                  </td>
                  <td key={`${instructor.totalCourses}-total-courses-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.totalCourses}
                  </td>
                  <td key={`${instructor.totalStudents}-student-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.totalStudents}
                  </td>
                  <td key={`${instructor.totalCourses}-student-taughts-${index}`} className="p-3 border" rowSpan={2}>
                    {instructor.totalTaughtStudents}
                  </td>
                  <td key={`${instructor.passedStudents}-passed-${index}`}className="p-3 bg-green border text-green-700 font-medium">
                    {instructor.passedStudents}
                  </td>
                </tr>
                <tr key={`sub-${index}-2`} className="bg-red hover:bg-green-50">
                  <td key={`${instructor.totalCourses}-faild-students-${index}`} className="p-3 border text-red-600 font-medium">
                    {instructor.failedStudents}
                  </td>
                </tr>
                </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
