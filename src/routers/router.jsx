
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

import Login from '../pages/login';
import Home from '../pages/home';
export default function Router() {
  const nagative = useNavigate('');
  useEffect(() => {
    if ( Cookies.token !== undefined) {
        nagative('/')
    }

  }, )
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}
