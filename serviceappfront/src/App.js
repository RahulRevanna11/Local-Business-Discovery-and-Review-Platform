
import './App.css';
import  { Routes,Route } from 'react-router-dom';
import ContactUs from './page/ContactUs';
import Home from './component/HomePage';
function App() {
  return (
    <div >
    <Routes>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path="/" element={<Home/>}/>
        
    </Routes>
    </div>
  );
}

export default App;
