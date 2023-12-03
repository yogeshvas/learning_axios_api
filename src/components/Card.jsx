import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { IoReloadCircleSharp } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";

export default function MediaCard() {
  const [activity, setActivity] = useState([]);

  //cat api
  const [cat, setCat] = useState({});

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        setCat(response.data[0]); // response.data is an array, so you need to access the first element
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // empty dependency array to run only once

  //activity api
  useEffect(() => {
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((response) => {
        setActivity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Never Get Bored :)</h1>
      <Card sx={{ maxWidth: 500, maxHeight: 700 }}>
        <img
          src={cat.url}
          style={{
            maxHeight: 400,
            maxWidth: 500,
            minHeight: 400,
            minWidth: 500,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity: {activity.activity}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
      <IoReloadCircleSharp
        style={{ padding: "1rem", position: "fixed", bottom: 0, right: 0 }}
        onClick={() => window.location.reload(true)}
        size={70}
      />
      <SiAboutdotme
        style={{ padding: "1rem", position: "fixed", bottom: 0, left: 0 }}
        onClick={() => (window.location.href = "http://www.w3schools.com")}
        size={70}
      />{" "}
    </>
    // <>
    //   {/* <img src={cat.url} alt="" /> */}
    //   hi
    // </>
  );
}
