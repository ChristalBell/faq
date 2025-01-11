"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import QuestionAccordion from "./QuestionAccordion";
import data from "../data/data.json";

const FAQContainer = () => {
  const [questionAnswer, setQuestionAnswer] = useState(data);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "2rem",
        width: "37.5rem",
        height: "55vh",
      }}
    >
      <Typography
        variant="h1"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}
      >
        FAQs
      </Typography>
      {questionAnswer.map((qA) => {
        return <QuestionAccordion questionAnswer={qA} key={qA.question} />;
      })}
    </Box>
  );
};

export default FAQContainer;
