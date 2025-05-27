// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  alignItems: "center",
  marginTop: 32,
}));

const CardHolder = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 32,
}));

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  alignItems: "center",
  border: "1px solid #E0E0E0",
  borderRadius: "10px",
  padding: 32,
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  color: "#000339",
  fontWeight: "600",
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#5A6473",
  lineHeight: "27px",
}));

const Divider = styled("div")(({ theme }) => ({
  width: "7%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function ResearchObjectives() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <Divider />
      <Typography
        sx={{
          fontSize: "35px",
          color: "#000339",
          fontWeight: "700",
          my: 3,
        }}
      >
        Research Objectives
      </Typography>
      <CustomBox>
        <CardHolder>
          <LooksOneIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Early Biomarker Identification
            </LargeText>
            <SmallText>
              Analyze Alzheimer’s, autism, depression, and Parkinson’s datasets
              to identify early warning signs and predictive biomarkers. This
              helps improve early diagnosis and reduces delays in treatment,
              providing crucial intervention opportunities for patients.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <LooksTwoIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Enhanced Predictive Modeling
            </LargeText>
            <SmallText>
              Develop machine learning models that combine clinical,
              behavioral, and biological data to improve the accuracy of
              predictions across these disorders, aiming to reduce misdiagnosis
              and improve outcome forecasting.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <Looks3Icon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Personalized Intervention Strategies
            </LargeText>
            <SmallText>
              Use advanced analytics to recommend personalized treatment plans,
              matching patient-specific patterns with the most effective
              therapeutic and management strategies for each condition.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <Looks4Icon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Data-Driven Healthcare Insights
            </LargeText>
            <SmallText>
              Provide healthcare providers with actionable insights derived from
              large-scale datasets, enhancing clinical decision-making,
              long-term monitoring, and improving healthcare delivery across
              neurological and psychological disorders.
            </SmallText>
          </Card>
        </CardHolder>
      </CustomBox>
    </Container>
  );
}
