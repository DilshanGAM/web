// * Images
import SystemArchitectureImg from "../media/system-architecture.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "13%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Methodology() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <CustomBox>
        <img
          src={SystemArchitectureImg}
          alt="System Architecture Diagram"
          style={{
            maxWidth: "30vw",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        />
        <Box>
          <Divider />
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            Methodology
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            Our research methodology followed a rigorous, data-driven approach:
            <br />
            <br />
            1. Literature Review & Gap Analysis: Conducted an extensive review of clinical, behavioral, and neurological research on Alzheimer’s, autism, depression, and Parkinson’s. Identified critical gaps, particularly in early diagnosis and predictive modeling.
            <br />
            <br />
            2. Dataset Preparation: Gathered multi-modal datasets (clinical records, imaging data, behavioral scores) and performed data cleaning, normalization, and feature selection to ensure consistency across conditions.
            <br />
            <br />
            3. Model Design: Developed machine learning pipelines using supervised and unsupervised algorithms to identify biomarkers, detect patterns, and improve prediction accuracy. Applied cross-validation and hyperparameter tuning for robustness.
            <br />
            <br />
            4. Implementation: Integrated the models into a unified analytical framework, capable of handling large-scale datasets, and visualizing risk scores, patient clustering, and predictive outcomes.
            <br />
            <br />
            5. Evaluation: Assessed model performance using metrics such as precision, recall, F1-score, and ROC-AUC. Conducted comparative analysis against baseline clinical methods to validate improvement.
            <br />
            <br />
            This architecture enables researchers and clinicians to leverage multi-modal data for early detection, develop personalized treatment strategies, and advance understanding across neurological and psychological disorders.
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
