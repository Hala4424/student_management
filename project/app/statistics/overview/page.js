'use client';

import { useEffect, useState } from 'react';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaThLarge,
  FaRegChartBar,
} from 'react-icons/fa';
import '../../styles/statistics.css';

export default function OverviewPage() {
  const [data, setData] = useState({
    totalStudents: 0,
    totalInstructors: 0,
    totalCourses: 0,
    courseCategories: 0,
    totalClasses: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/statistics/overview');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Total Students',
      value: data.totalStudents,
      icon: <FaUserGraduate className="card-icon student" />,
    },
    {
      title: 'Total Instructors',
      value: data.totalInstructors,
      icon: <FaChalkboardTeacher className="card-icon instructor" />,
    },
    {
      title: 'Total Courses',
      value: data.totalCourses,
      icon: <FaBookOpen className="card-icon course" />,
    },
    {
      title: 'Course Categories',
      value: data.courseCategories,
      icon: <FaThLarge className="card-icon category" />,
    },
    {
      title: 'Total Classes',
      value: data.totalClasses,
      icon: <FaRegChartBar className="card-icon class" />,
    },
  ];

  return (
    <div className="overview-container">
      <h2 className="section-title">Overview</h2>
      <div className="stats-grid">
        {cards.map((card, index) => (
          <div className="stat-card" key={index}>
            {card.icon}
            <div className="stat-content">
              <div className="stat-value">{card.value}</div>
              <div className="stat-label">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
