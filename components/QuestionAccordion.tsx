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
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography>{question}</Typography>
        <Button onClick={() => setShowAnswer(!showAnswer)}>+</Button>
      </Box>

      <Box sx={{ width: "32.5rem", display: showAnswer ? "flex" : "none " }}>
        <Typography>{answer}</Typography>
      </Box>
    </Box>
  );
};

export default QuestionAccordion;
