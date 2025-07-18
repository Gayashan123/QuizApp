import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import QuizPage from "./pages/LeaderBoared";
import UserDashboard from "./pages/QuizDashboared";
import Teacher from "./Teacher/pages/Home"
import Admin from "./Admin/pages/Home"
import Student from "./Student/pages/Home"
import CreateQuiz from "./Teacher/pages/CreateQuiz";

function App() {
  return (
    <Router>
    
      <Routes>
        {/* Home Route shows all main sections */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Header />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Login Page Route */}
        <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/quizpage" element={<QuizPage />} />
            <Route path="/user" element={<UserDashboard />} />
             <Route path="/home" element={<Teacher />} />
             <Route path="/admin" element={<Admin />} />
                    <Route path="/student" element={<Student />} />
                       <Route path="/createquiz" element={<CreateQuiz />} />


      </Routes>
    </Router>
  );
}

export default App;
