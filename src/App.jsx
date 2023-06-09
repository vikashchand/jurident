
import './App.css';

import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './Screen/Home/Home';

import Services from './Screen/Services/Services';
import About from './Screen/About/About';
import News from './Screen/News/News';
import Blogs from './Screen/Blogs/Blogs';

import ContactPage from './Screen/Contactus/ContactPage';
import ChatBot from './components/ChatBot/ChatBot';
import Navbar from './components/Navbar/Navbar';
import Calendar from './components/calendar/Calendar';





function App() {
  return (
<>
  
    <Router>
   <Navbar/>
    <Routes>

    <Route exact path="/" element={<Home/>}/>
    
    
    <Route  path="/Services" element={<Services/>}/>
    <Route  path="/About" element={<About/>}/>
    <Route  path="/News" element={<News/>}/>
    <Route  path="/Blogs" element={<Blogs/>}/>
    <Route  path="/Calendar" element={<Calendar/>}/>
    <Route  path="/Contact" element={<ContactPage/>}/>
   
  </Routes>
  </Router>
 <ChatBot/>
 
  </>
  );
}

export default App;
