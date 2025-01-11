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
          "&:hover": { color: " #fec722" },
        }}
      >
        <Typography sx={{ marginTop: "1rem", fontWeight: "bold" }}>
          {question}
        </Typography>
        <Button
          className="golden"
          sx={{
            borderRadius: "10rem",
            height: "3.75rem",
            padding: "0",
            color: "#FFF",
            fontWeight: "bold",
            marginBottom: ".5rem",

            "&:hover": { color: "#ff7414" },
          }}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          +
        </Button>
      </Box>

      <Box
        sx={{
          width: "36.25rem",
          display: showAnswer ? "flex" : "none ",
        }}
      >
        <Typography sx={{ fontSize: ".75rem", width: "33.5vw" }}>
          {answer}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuestionAccordion;
