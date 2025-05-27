// * Images
import researchProblemImg from "../media/research-problem.png";

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

export default function ResearchProblem() {
	return (
		<Container sx={{ marginBottom: 16 }}>
			<CustomBox>
				<img
					src={researchProblemImg}
					alt="Research Problem Illustration"
					style={{ maxWidth: "30vw" }}
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
						Research Problem
					</Typography>

					<Typography
						sx={{
							fontSize: "16px",
							color: "#5A6473",
							lineHeight: "27px",
						}}
					>
						Alzheimer’s, autism, depression, and Parkinson’s datasets present a
						critical research challenge: understanding the subtle, complex
						patterns underlying these neurological and psychological disorders.
						The research problem centers on identifying early biomarkers,
						improving diagnostic accuracy, and minimizing misdiagnosis, which
						often delays treatment. Current clinical methods can miss early
						warning signs, leading to worsened outcomes. By harnessing these
						datasets through machine learning and advanced analytics,
						researchers aim to develop predictive models that enable early
						detection, support personalized treatment plans, and enhance patient
						care. The ultimate goal is to translate data-driven insights into
						real-world improvements for diagnosis, intervention, and long-term
						disease management.
					</Typography>
				</Box>
			</CustomBox>
		</Container>
	);
}
