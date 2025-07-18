// components/admin/Sidebar.jsx
import React, { useState } from "react";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartLine,
  FaCog,
  FaDatabase,
  FaShieldAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import AdminNavItem from "../components/NavItem";

export default function Sidebar({ adminName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-lg bg-indigo-700 text-white shadow-lg hover:bg-indigo-800 transition"
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Desktop Sidebar (hidden on mobile) */}
      <aside className="hidden md:flex flex-col w-64 bg-indigo-800 text-white p-6 sticky top-0 h-screen">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">QuizMaster</h1>
          <p className="text-sm text-indigo-200">Admin Portal</p>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <AdminNavItem icon={<FaChartLine />} active>Dashboard</AdminNavItem>
          <AdminNavItem icon={<FaUsers />}>User Management</AdminNavItem>
          <AdminNavItem icon={<FaChalkboardTeacher />}>Teachers</AdminNavItem>
          <AdminNavItem icon={<FaClipboardList />}>Quizzes</AdminNavItem>
          <AdminNavItem icon={<FaDatabase />}>Data</AdminNavItem>
          <AdminNavItem icon={<FaShieldAlt />}>Security</AdminNavItem>
          <AdminNavItem icon={<FaCog />}>System Settings</AdminNavItem>
        </nav>

        <div className="mt-auto pt-6 border-t border-indigo-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
              {adminName[0]}
            </div>
            <div>
              <p className="font-medium">{adminName}</p>
              <p className="text-xs text-indigo-300">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay and Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Sidebar Content */}
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-indigo-800 text-white z-50 overflow-y-auto">
            <div className="p-6">
              <div className="mb-10 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">QuizMaster</h1>
                  <p className="text-sm text-indigo-200">Admin Portal</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                <AdminNavItem icon={<FaChartLine />} active>Dashboard</AdminNavItem>
                <AdminNavItem icon={<FaUsers />}>User Management</AdminNavItem>
                <AdminNavItem icon={<FaChalkboardTeacher />}>Teachers</AdminNavItem>
                <AdminNavItem icon={<FaClipboardList />}>Quizzes</AdminNavItem>
                <AdminNavItem icon={<FaDatabase />}>Data</AdminNavItem>
                <AdminNavItem icon={<FaShieldAlt />}>Security</AdminNavItem>
                <AdminNavItem icon={<FaCog />}>System Settings</AdminNavItem>
              </nav>

              <div className="mt-auto pt-6 border-t border-indigo-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
                    {adminName[0]}
                  </div>
                  <div>
                    <p className="font-medium">{adminName}</p>
                    <p className="text-xs text-indigo-300">Super Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}