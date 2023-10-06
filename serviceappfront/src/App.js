
import './App.css';
import  { Routes,Route } from 'react-router-dom';
import ContactUs from './page/ContactUs';
function App() {
  return (
    <div >
    <Routes>
        <Route path='/contactUs' element={<ContactUs/>}/>
        
    </Routes>
    </div>
  );
}

export default App;
