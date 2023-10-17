import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";

const MyCard = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const imageUrl = "https://localhost:7210/WeatherForecast?productId=12345";
  
  const getImage2 = async () => {
    try {
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);

      setImage(url);
      setLoading(false);
      console.log(url)
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = async () => {
    try {
      const response = await axios.get(imageUrl, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: response.headers["content-type"]   });
      const url = URL.createObjectURL(blob);

      setImage(url);
      setLoading(false);
      console.log(url)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {


    getImage();
  }, []);

  return (
    <div>
      <img src={image} alt="API image" />
    </div>
    // <Card sx={{ maxWidth: 345 }}>
    //   {loading ? (
    //     <CircularProgress />
    //   ) : (
    //     <CardMedia component="img" height="140" image={image} alt="API image" />
    //   )}
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Card title
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Some quick example text to build on the card title and make up the bulk
    //       of the card's content.
    //     </Typography>
    //   </CardContent>
    //   <Button variant="outlined" color="secondary" type="submit">Submit</Button>
    // </Card>
  );
};
export default MyCard;