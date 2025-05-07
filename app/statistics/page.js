"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import {
  FaChartPie,
  FaUserGraduate,
  FaListAlt,
  FaExclamationTriangle,
  FaThLarge,
  FaBook,
  FaChalkboardTeacher,
  FaRegChartBar,
  FaGraduationCap,
  FaUserTimes,
  FaSignOutAlt,
} from "react-icons/fa";

import Overview from "./overview/page";
import StudentsPerYear from "./students-per-year/page";
import TopCoursesPage from "./top-courses/page";
import FailureRatePage from "./failure-rate/page";
import ByCategoryPage from "./by-category/page";
import ByCoursePage from "./by-course/page";
import InstructorStatsPage from "./instructor-stats/page";
import ClassesPerCoursePage from "./classes-per-courses/page";
import AverageGradesPage from "./average-grades/page";
import PublishedCoursesInterestPage from "./course-interests/page";

import "../styles/overview.css";

const tabs = [
  { name: "Overview", key: "overview", icon: <FaChartPie /> },
  { name: "Students Per Year", key: "students-per-year", icon: <FaUserGraduate /> },
  { name: "Top Courses", key: "top-courses", icon: <FaListAlt /> },
  { name: "Failure Rate", key: "failure-rate", icon: <FaExclamationTriangle /> },
  { name: "By Course Category", key: "by-category", icon: <FaThLarge /> },
  { name: "By Course", key: "by-course", icon: <FaBook /> },
  { name: "Instructor Stats", key: "instructor-stats", icon: <FaChalkboardTeacher /> },
  { name: "Classes Per Course", key: "classes-per-course", icon: <FaRegChartBar /> },
  { name: "Average Grades", key: "average-grades", icon: <FaGraduationCap /> },
  { name: "Course Intrests", key: "course-intrests", icon: <FaUserTimes /> },
];

export default function StatisticsClient({ session }) {
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "students-per-year":
        return <StudentsPerYear />;
      case "top-courses":
        return <TopCoursesPage />;
      case "failure-rate":
        return <FailureRatePage />;
      case "by-category":
        return <ByCategoryPage />;
      case "by-course":
        return <ByCoursePage />;
      case "instructor-stats":
        return <InstructorStatsPage />;
      case "classes-per-course":
        return <ClassesPerCoursePage />;
      case "average-grades":
        return <AverageGradesPage />;
      case "course-intrests":
        return <PublishedCoursesInterestPage />;
      default:
        return <p style={{ marginTop: "20px" }}>Coming Soon: {activeTab}</p>;
    }
  };

  return (
    <div className="statistics-container">
      <div className="dashboard-header">
        <div className="statistics-title-with-icon">
          <img src="/logo.png" alt="Statistics Icon" className="stats-title-icon" />
          <h1 className="statistics-title">Statistics Dashboard</h1>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Log Out
        </button>
      </div>
      <div className="tabs">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-name">{tab.name}</span>
          </span>
        ))}
      </div>

      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}
