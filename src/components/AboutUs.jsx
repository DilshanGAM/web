// * MUI Components
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";

// * Images
import people from "../media/people/people.jpg";

function PersonCardd({ imageSrc, name, email }) {
  return (
    <Card sx={{ width: 300, boxShadow: 3, borderRadius: 2 }}>
      <Box
        component="img"
        src={imageSrc}
        alt={`${name}'s picture`}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "scale-down",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`mailto:${email}`} underline="hover" color="primary">
          Contact
        </Link>
      </CardActions>
    </Card>
  );
}

export default function AboutUs({ aboutUsRef }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}
      ref={aboutUsRef}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        About Us
      </Typography>

      <Typography
        variant="h3"
        sx={{ fontSize: "28px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Supervisors
      </Typography>
      <Box display={"flex"} flexDirection={"row"} gap={8}>
        <PersonCardd
          imageSrc={people}
          name={"Mrs. Wishalya Thisera"}
          email={"wishalya.t@sliit.lk"}
        />
        <PersonCardd
          imageSrc={people}
          name={"Dr. Kapila Dissanayake"}
          email={"kapila.d@sliit.lk"}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#000339",
          mb: 3,
          mt: 8,
        }}
      >
        Our Team
      </Typography>
      <Box display={"flex"} flexDirection={"row"} gap={8}>
        <PersonCardd
          imageSrc={people}
          name={"Malith Dilshan"}
          email={"malithdilshan27@gmail.com"}
        />
        <PersonCardd
          imageSrc={people}
          name={"Kavindi Perera"}
          email={"ksathperera@gmail.com"}
        />
        <PersonCardd
          imageSrc={people}
          name={"Nayani Chamalean"}
          email={"nayani99@gmail.com"}
        />
        <PersonCardd
          imageSrc={people}
          name={"Kavindu Ashen"}
          email={"ashenwijayasooriya2000@gmail.com"}
        />
      </Box>
    </Box>
  );
}
