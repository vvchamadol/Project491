//import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Layout
//import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
//import SideBar from "./layout/SideBar";


function App() {
  return (
  <BrowserRouter>
    <>
      <CssBaseline />
      <div className="app">
       {/*SideBar*/}
        <main className="content">
          {/*HeaderBar*/}
          <div className="content_body">
            <Box m="20px">
            <a class="btn btn-sm btn-outline-secondary" href="/login">Sign In</a> <br></br>
            <a class="btn btn-sm btn-success" href="/register">Sign Up</a> <br></br>
            <a class="btn btn-sm btn-home" href="/">Home</a>
              <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  </BrowserRouter>
  );
}

export default App;
