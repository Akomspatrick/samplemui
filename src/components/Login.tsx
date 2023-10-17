import React, {useEffect, useState} from "react";
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {Buffer} from 'buffer';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [ReceivedImag, setReceivedImage] = useState("")
    const [base64, setBase64] = useState("Nothing");
    const [TheState, setTheState] = useState<any>();

    function setImage(responseAsBlob : Blob ): string   {
      const imgUrl = URL.createObjectURL(responseAsBlob);  
      return imgUrl;
    }
    // const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()

    //    // setEmailError(false)
    //     //setPasswordError(false)

    //     // if (email === '') {
    //     //     setEmailError(true)
    //     // }
    //     // if (password === '') {
    //     //     setPasswordError(true)
    //     // }

    //     // if (email && password) {
    //     //     console.log(email, password)
    //     // }


    //     //send this data to backend api server to register the user
    //     var modelTypeName =email
    //     // try {
    //     //     const response = await fetch("http://localhost:5007/ModelType", {
    //     //       method: "POST",
    //     //       headers: {
    //     //         "Content-Type": "application/json",
    //     //       },
    //     //      // body: JSON.stringify({ email, password }),
    //     //       body: JSON.stringify({ modelTypeName }),
    //     //     });
      
    //     //     if (response.ok) {
    //     //       console.log("User logged in successfully");
    //     //     } else {
    //     //       console.error("Failed to log in user");
    //     //     }
    //     //   } catch (error) {
    //     //     console.error(error);
    //     //   }
    //     try {
    //         const response = await axios.post("http://localhost:5007/ModelType", {
    //           modelTypeName,
    //         });
          
    //         if (response.status === 200) {
    //           var result= setImage(await response.data)
    //           setReceivedImage(result);
    //           console.log("User logged in successfully");
    //         } else {
    //           console.error("Failed to log in user");
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    // }

    const handleGetLabel = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      var productId =email
      const imageUrl =`https://localhost:7210/WeatherForecast?productId=${productId}`
    
        try {
          const response = await axios.get(imageUrl, {
            responseType: "blob",
          });
        
          if (response.status === 200) {
            const blob = new Blob([response.data], { type: response.headers["content-type"]   });
            const url = URL.createObjectURL(blob);
            setReceivedImage(url);
          } else {
            console.error("Failed to log in user");
          }
        } catch (error) {
          console.error(error);
      }

      
  }
  // useEffect(() => {
  //   var productId =email
  //   axios
  //     .get(
  //       "https://localhost:7210/WeatherForecast?productId=12345",
  //       {
  //         responseType: "arraybuffer",
          
  //       }
  //     )
  //     .then((response) =>
  //     {
  //       console.log(response.data);
  //       setBase64(Buffer.from(response.data, "binary").toString("base64"))
  //       setTheState({ TheState: response.data.message });
  //       console.log(base64);
  //     }
  //     );
  // }, []);
    return ( 
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleGetLabel}>
            <h2>Login Form</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                   // type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    //type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
                 {/* <Button variant="outlined" color="secondary" type="button" onClick={}>Submit</Button> */}
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={ReceivedImag}
        alt="Random image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Typography>
      </CardContent>
    </Card>
        </form>
        <small>Need an account?
             <Link to="/">Register here</Link>
             </small>
        </React.Fragment>
     );
}
 
export default Login;