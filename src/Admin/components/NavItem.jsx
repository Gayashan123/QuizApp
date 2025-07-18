// components/admin/AdminNavItem.jsx
import React from "react";

export default function AdminNavItem({ icon, children, active = false }) {
  return (
    <button className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${active ? 'bg-indigo-700 text-white font-medium' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'}`}>
      <span className="text-lg">{icon}</span>
      <span>{children}</span>
    </button>
  );
}
