"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import QuestionAccordion from "./QuestionAccordion";
import data from "../data/data.json";

const FAQContainer = () => {
  const [questionAnswer, setQuestionAnswer] = useState(data);
  useEffect(() => {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((json) => setQuestionAnswer(json));
  });

  // const questionAnswer = [
  //   {
  //     question: "What is the Elevation Experience?",
  //     answer: "Sustainable lifestyle changes and habits ",
  //   },
  //   {
  //     question: "What is the Elevation Experience?",
  //     answer: "Sustainable lifestyle changes and habits ",
  //   },
  //   {
  //     question: "What is the Elevation Experience?",
  //     answer: "Sustainable lifestyle changes and habits ",
  //   },
  //   {
  //     question: "What is the Elevation Experience?",
  //     answer: "Sustainable lifestyle changes and habits ",
  //   },
  // ];
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "2rem",
        width: "37.5rem",
        height: "35.3125rem",
      }}
    >
      <Typography variant="h1">FAQs</Typography>
      {questionAnswer.map((qA) => {
        return <QuestionAccordion questionAnswer={qA} key={qA.question} />;
      })}
    </Box>
  );
};

export default FAQContainer;
