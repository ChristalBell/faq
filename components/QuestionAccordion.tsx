"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Button from "@mui/material/Button";

interface Props {
  questionAnswer: {
    question: string;
    answer: string;
  };
}

const QuestionAccordion = ({ questionAnswer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { question, answer } = questionAnswer;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "36.25rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 600,
          "&:hover": { color: "gold" },
        }}
      >
        <Typography>{question}</Typography>
        <Button onClick={() => setShowAnswer(!showAnswer)}>+</Button>
      </Box>

      <Box sx={{ width: "36.25rem", display: showAnswer ? "flex" : "none " }}>
        <Typography>{answer}</Typography>
      </Box>
    </Box>
  );
};

export default QuestionAccordion;
