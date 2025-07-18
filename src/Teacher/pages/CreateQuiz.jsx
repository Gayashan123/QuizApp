import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Snackbar,
  Alert,
  Button
} from "@mui/material";
import { Save } from "@mui/icons-material";

import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import QuizDetailsStep from "../components/QuizDetailsStep";
import AddQuestionsStep from "../components/AddQuestionsStep";
import ReviewStep from "../components/ReviewStep";

const steps = ["Quiz Details", "Add Questions", "Review & Publish"];

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const [quiz, setQuiz] = useState({
    title: "",
    subject: "",
    description: "",
    questions: [],
    timeLimit: 30,
    passingScore: 70,
    startDate: "",
    deadline: "",
    pdfFile: null
  });

  const showSnackbar = (message, severity) => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleNext = () => {
    if (activeStep === 0 && (!quiz.title || !quiz.subject)) {
      showSnackbar("Please fill in all required quiz details", "error");
      return;
    }
    if (activeStep === 1 && tabValue === 0 && quiz.questions.length === 0) {
  showSnackbar("Please add at least one question", "error");
  return;
}

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitQuiz = async () => {
    if (
      !quiz.title ||
      !quiz.subject ||
      !quiz.timeLimit ||
      !quiz.passingScore ||
      !quiz.startDate ||
      !quiz.deadline ||
      quiz.questions.length === 0
    ) {
      showSnackbar("Please fill all fields and add at least one question", "error");
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Quiz submitted:", quiz);
      showSnackbar("Quiz published successfully!", "success");
      navigate("/teacher/dashboard");
    } catch (e) {
      showSnackbar("Failed to create quiz. Please try again.", "error");
    }
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f8fc", minHeight: "100vh" }}>
      <Sidebar teacherName="Teacher" />
      <Box sx={{ flex: 1, minHeight: "100vh" }}>
        
        
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        <Container maxWidth="md" sx={{ pt: 6, pb: 4 }}>
          <Paper
            elevation={4}
            sx={{
              borderRadius: 5,
              p: { xs: 2, md: 4 },
              background: "white",
              mt: 2,
              boxShadow: "0 4px 20px rgba(0,0,30,0.1)",
            }}
          >
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel sx={{ '& .MuiStepLabel-label': { fontWeight: 600 } }}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <QuizDetailsStep 
                quiz={quiz} 
                setQuiz={setQuiz} 
                showSnackbar={showSnackbar} 
              />
            )}

            {activeStep === 1 && (
              <AddQuestionsStep 
                quiz={quiz} 
                setQuiz={setQuiz} 
                showSnackbar={showSnackbar} 
              />
            )}

            {activeStep === 2 && <ReviewStep quiz={quiz} />}

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 }
                }}
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Save />}
                  onClick={submitQuiz}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #10b981 0%, #34d399 100%)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #059669 0%, #10b981 100%)"
                    },
                    "&:disabled": {
                      background: "#e2e8f0",
                      color: "#94a3b8"
                    }
                  }}
                >a
                  Publish Quiz
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #4338ca 0%, #6d28d9 100%)"
                    }
                  }}
                >
                  Continue
                </Button>
              )}
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}