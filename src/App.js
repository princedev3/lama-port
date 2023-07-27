
import { useState } from 'react';
import './App.scss';
import Contact from './component/contact/Contact';
import Intro from './component/intro/Intro';
import Portfolio from './component/portfolio/Portfolio';
import Testimonial from './component/testimonial/Testimonial';
import Topbar from './component/topbar/Topbar';
import Work from './component/work/Work';
import Menu from './component/menu/Menu';
//{}[]
function App() {
  const[menuOpen,setMenuopen]= useState(false)
  return (
    <div className='app'>
       <Topbar menuOpen={menuOpen} setMenuopen={setMenuopen}/>
       <Menu menuOpen={menuOpen} setMenuopen={setMenuopen}/>
       <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
       </div>
   
    </div>
  );
}

export default App;
