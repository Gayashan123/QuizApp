import React from "react";
import {
  FaPlusCircle,
  FaChartBar,
  FaUserGraduate,
  FaClipboardList,
} from "react-icons/fa";

const actionMap = {
  createQuiz: {
    icon: <FaPlusCircle className="text-indigo-600" />,
    title: "Create New Quiz",
    description: "Design a new quiz for your class",
    color: "bg-indigo-50",
  },
  viewAnalytics: {
    icon: <FaChartBar className="text-purple-600" />,
    title: "View Analytics",
    description: "See performance insights",
    color: "bg-purple-50",
  },
  manageStudents: {
    icon: <FaUserGraduate className="text-green-600" />,
    title: "Manage Students",
    description: "Add or remove students",
    color: "bg-green-50",
  },
  gradeSubmissions: {
    icon: <FaClipboardList className="text-blue-600" />,
    title: "Grade Submissions",
    description: "Review student answers",
    color: "bg-blue-50",
  },
};

export default function ActionButton({ type }) {
  const { icon, title, description, color } = actionMap[type] || {};
  return (
    <button className={`${color} hover:bg-opacity-70 transition p-4 rounded-lg text-left`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}
