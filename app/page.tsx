import FAQContainer from "@/components/FAQContainer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="deepBlue"
        style={{
          width: "100vw",
          height: "15vh",
          boxShadow: ".8rem .57rem .5rem #fec722 ",
        }}
      >
        {" "}
        <Typography
          variant="h1"
          sx={{
            color: "#FFF",
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          Elevation Experience
        </Typography>
      </div>

      <Box
        sx={{
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <FAQContainer />
      </Box>
    </div>
  );
};

export default Home;
