import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Quiz from "../assets/Quiz1.jpg";
import { FaSignInAlt, FaUserShield, FaChalkboardTeacher, FaHome } from "react-icons/fa";
import Login from "../components/StudentLogin"; // check path
import AdminLogin from "../components/AdminLog";  // check path
import TeacherLogin from "../components/TeacherLogin";


const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 180, damping: 20 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 25 },
  },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } },
};

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [adminLog, setAdminLog] = useState(false);
  const [teacherLog, setTeacherLog] = useState(false);
  const navigate = useNavigate();

  // Optional: Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowLogin(false);
        setAdminLog(false);
        setTeacherLog(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Common function to close all modals
  const closeAll = () => {
    setShowLogin(false);
    setAdminLog(false);
    setTeacherLog(false);
  };

  return (
    <>
      {/* Home Icon Button */}
      <motion.button
        onClick={() => navigate("/")}
        aria-label="Go to Home"
        className="fixed top-5 left-5 z-50 bg-white/90 p-3 rounded-full shadow-md"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
        whileTap={{ scale: 0.95 }}
      >
        <FaHome className="text-teal-600 w-6 h-6" />
      </motion.button>

      {/* Main Home UI */}
      <motion.div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${Quiz})` }}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
            Welcome to <span className="text-blue-600">QuizMaster</span>
          </h1>
          <p className="text-gray-700 mb-6 text-base font-light">
            Challenge your mind. Play smart. Learn fast.
          </p>

          <div className="flex flex-col gap-4">
            <motion.button
             onClick={() => navigate("/student")}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-2xl shadow-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaSignInAlt /> Student Login
            </motion.button>

            <motion.button
             onClick={() => navigate("/admin")}
              className="w-full flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-2xl shadow-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUserShield /> Admin Login
            </motion.button>

            <motion.button
              onClick={() => navigate("/home")}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-2xl shadow-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaChalkboardTeacher /> Teacher Login
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modals with backdrop */}
      <AnimatePresence>
        {(showLogin || adminLog || teacherLog) && (
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeAll}
            aria-hidden="true"
          />
        )}

        {showLogin && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent backdrop close when clicking modal content
          >
            <Login closeLogin={() => setShowLogin(false)} />
          </motion.div>
        )}

        {adminLog && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <AdminLogin closeLogin={() => setAdminLog(false)} />
          </motion.div>
        )}

        {teacherLog && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <TeacherLogin closeLogin={() => setTeacherLog(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
