import './App.css';
import '../src/Components/Organism/Header';
import Header from '../src/Components/Organism/Header';
import HotelList from './Components/Organism/HotelList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import SubLocationHotels from './Components/Organism/SubLocationHotels';
 import RegisterHotel from './Components/Organism/RegisterHotelForm/RegisterHotel';
import MenuListcmp from './Components/Organism/Menulist';
import SignUp from './Components/Organism/SignUp';
import Footer from './Components/Organism/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Header/>}></Route>
        <Route path='/hotellist' element={<HotelList/>}></Route>
        <Route path='/subLocationHotels' element= {<SubLocationHotels/>}/> 
        <Route path='/registerHotels' element={<RegisterHotel/>}/>
        <Route path='/hotellist/menuList' element={<MenuListcmp/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
