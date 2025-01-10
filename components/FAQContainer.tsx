import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import QuestionAccordion from "./QuestionAccordion";

const FAQContainer = () => {
  const questionAnswer = [
    {
      question: "What is the Elevation Experience?",
      answer: "Sustainable lifestyle changes and habits ",
    },
    {
      question: "What is the Elevation Experience?",
      answer: "Sustainable lifestyle changes and habits ",
    },
    {
      question: "What is the Elevation Experience?",
      answer: "Sustainable lifestyle changes and habits ",
    },
    {
      question: "What is the Elevation Experience?",
      answer: "Sustainable lifestyle changes and habits ",
    },
  ];
  return (
    <Box
      sx={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "2rem" }}
    >
      <Typography variant="h1">FAQs</Typography>
      {questionAnswer.map((qA) => {
        return <QuestionAccordion questionAnswer={qA} key={qA.question} />;
      })}
    </Box>
  );
};

export default FAQContainer;
