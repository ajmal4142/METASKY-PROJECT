import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { Typography, Grid, Avatar, Card } from "@mui/material";

const PersonalDetails: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <div>Please log in to view personal details.</div>;
  }

  const {
    name: { title, first, last },
    login: { username },
    email,
    dob: { age, date },
    location: { country, city, postcoad, state },
    picture: { large },
    phone,
  } = user;

  return (
    <Card
      sx={{
        p: 3,
        width: "50%",
        height: "100vh",
        display: "flex",
        mx: "auto",
        my: "10px",
      }}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} display="flex" justifyContent="center">
          <Avatar
            alt="User Avatar"
            src={large}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h4"
            sx={{
              "@media(max-width:600px)": {
                fontSize: "22px",
                fontWeight: "bold",
              },
            }}>
            {title} {first} {last}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6">@{username}</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1">
            <strong>Email:</strong> {email}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1">
            <strong>DOB:</strong> {date.split("T")[0]}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1">
            <strong>Age:</strong> {age}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" sx={{ width: "200px" }}>
          <Typography variant="body1">
            <strong>Location:</strong> {city} {state} {postcoad} {country}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1">
            <strong>Phone:</strong> {phone}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PersonalDetails;
