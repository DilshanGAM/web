// * MUI Components
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Box, Typography, styled } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TaskIcon from "@mui/icons-material/Task";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";

const CardContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-around",
	width: "70%",
	marginTop: 32,
	marginBottom: 32,
	flexWrap: "wrap",
}));

const Card = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginLeft: 8,
	marginRight: 8,
	marginBottom: 24,
}));

export default function ResearchGap() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				marginBottom: 16,
			}}
		>
			<div
				style={{
					width: "5%",
					height: "5px",
					backgroundColor: "#000339",
					margin: "0 auto",
				}}
			></div>

			<Typography
				variant="h3"
				sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
			>
				Research Gap
			</Typography>

			<CardContainer>
				<Card>
					<EngineeringIcon sx={{ fontSize: 80, color: "#000339" }} />
					<Typography
						variant="body2"
						sx={{
							fontWeight: "500",
							fontSize: "20px",
							color: "#3B3c45",
							my: 1,
						}}
					>
						Granularity of Disease Progression Tracking Problem
					</Typography>
					<Box
						sx={{
							cursor: "default",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: "20vw",
							textAlign: "center",
						}}
					>
						Disease progression is typically tracked at broad stages (e.g.,
						early vs. late Alzheimer’s) without fine-grained insights into
						symptom evolution. Gap: There is limited real-time or longitudinal
						data fusion to assess micro-level progression or transitions between
						disease states.
					</Box>
				</Card>

				<Card>
					<ManageSearchIcon sx={{ fontSize: 80, color: "#000339" }} />
					<Typography
						variant="body2"
						sx={{
							fontWeight: "500",
							fontSize: "20px",
							color: "#3B3c45",
							my: 1,
						}}
					>
						Detection of Architectural SmellsWeak Interpretability of Model
						Decisions Problem
					</Typography>
					<Box
						sx={{
							cursor: "default",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: "20vw",
							textAlign: "center",
						}}
					>
						Most ML/DL models in neuro-disorder detection work as “black boxes.”
						Gap: Lack of explainable AI (XAI) mechanisms makes it hard for
						clinicians to trust or act upon predictions, limiting clinical
						adoption in sensitive cases like Depression and ASD. as cyclic
						dependencies, nano-services, and bottlenecks.
					</Box>
				</Card>
			</CardContainer>

			<CardContainer>
				<Card>
					<TaskIcon sx={{ fontSize: 80, color: "#000339" }} />
					<Typography
						variant="body2"
						sx={{
							fontWeight: "500",
							fontSize: "20px",
							color: "#3B3c45",
							my: 1,
						}}
					>
						Unscalable Data Annotation and Monitoring Pipelines Problem:
					</Typography>
					<Box
						sx={{
							cursor: "default",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: "20vw",
							textAlign: "center",
						}}
					>
						Training large models for Parkinson's tremors, ASD gaze analysis, or
						Alzheimer’s brain changes requires huge labeled datasets. Gap:
						Manual annotation is time-consuming and not scalable; automation
						tools are needed for effective and ethical data labeling,
						monitoring, and validation.
					</Box>
				</Card>

				<Card>
					<MergeTypeIcon sx={{ fontSize: 80, color: "#000339" }} />
					<Typography
						variant="body2"
						sx={{
							fontWeight: "500",
							fontSize: "20px",
							color: "#3B3c45",
							my: 1,
						}}
					>
						Lack of Multimodal Diagnostic Integration Problem
					</Typography>
					<Box
						sx={{
							cursor: "default",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: "20vw",
							textAlign: "center",
						}}
					>
						Current diagnostic systems often focus on a single data modality
						(e.g., MRI for Alzheimer’s, facial images for ASD, voice patterns
						for Parkinson’s, or questionnaires for Depression). Gap: There is
						limited support for integrating multimodal data (images, speech,
						EEG, behavioral, genetic, and clinical text) for more accurate,
						early, and personalized diagnoses.
					</Box>
				</Card>

				<Card>
					<ElectricalServicesIcon sx={{ fontSize: 80, color: "#000339" }} />
					<Typography
						variant="body2"
						sx={{
							fontWeight: "500",
							fontSize: "20px",
							color: "#3B3c45",
							my: 1,
						}}
					>
						Limited Detection of Behavioral and Cognitive Biomarkers Problem
					</Typography>
					<Box
						sx={{
							cursor: "default",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: "20vw",
							textAlign: "center",
						}}
					>
						Many tools cannot capture or detect subtle behavioral or cognitive shifts that serve as early indicators (e.g., micro-expressions in ASD, speech fluency in Parkinson’s, memory lapses in Alzheimer’s, or sleep patterns in Depression).
Gap:
Current AI models often lack robustness or explainability in identifying meaningful biomarkers across time.
					</Box>
				</Card>
			</CardContainer>
		</Box>
	);
}
