
import { AppBar, Toolbar} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
 
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import MyCard from './components/MyCard';
//import RegisterForm from './components/Register';
function App() {
  // const [modelType, setModelType] = useState<string>('');
  
  // function setName(value: string): void {
  //   setModelType(value);
  //   console.log(modelType);
  // }

  return (
    <React.Fragment>
    <AppBar><Toolbar  > Form</Toolbar></AppBar>
    <Container sx={{ p: 10 }}>
    <Routes>
     
      <Route path="/login" element={<Login />} />
      <Route path="/mycard" element={<MyCard />} />
      
    </Routes>
   
     
    </Container>
    </React.Fragment>
  );
}

export default App;
