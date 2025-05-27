// * MUI Components
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
      }}
    >
      <Box
        sx={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          MentCare – Ai based metal health platform
        </Typography>

        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ marginTop: "10px", display: "block" }}
        >
          © 2024 MentCare – All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
