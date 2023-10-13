
import './App.css';
import  { Routes,Route } from 'react-router-dom';
import ContactUs from './page/ContactUs';
import Home from './component/HomePage';
import Profile from './page/Profile';
function App() {
  return (
    <div >
    <Routes>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path= "/profile" element={<Profile/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
