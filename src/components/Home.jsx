// * Components
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

// * Images
import HeroImg from "./../media/svg/server.svg"; // You can update this image with a custom one for MentCare

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomHomeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000336",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export default function Home({ homeRef, allRefs }) {
  const toGithub = () => {
    window.location.href = "https://github.com/DilshanGAM/ment-care-backend.git";
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        paddingBottom: 2,
        marginBottom: 6,
      }}
      ref={homeRef}
    >
      <Container>
        <Navbar allRefs={allRefs} />

        <CustomHomeBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to MentCare
            </Typography>
            <Title variant="h2">
              An AI based mental health care platform.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              MentCare is a cutting-edge platform designed to provide AI-driven
              mental health care solutions. Our mission is to make mental health
              support accessible, personalized, and effective for everyone.
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Explore on GitHub"
              onClick={toGithub}
            />
          </Box>

          <Box sx={{ flex: 1.25 }}>
            <img
              src={HeroImg}
              alt="MentCare Hero"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </CustomHomeBox>
      </Container>
    </Box>
  );
}
