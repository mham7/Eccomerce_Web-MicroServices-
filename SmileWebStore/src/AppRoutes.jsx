import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/login.jsx'
import Homepage from './pages/homepage.jsx'
import Signup from './pages/signup.jsx'
import Productlayout from './pages/productlayout.jsx';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/product" element={<Productlayout/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
