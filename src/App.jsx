import React, { useState } from "react";
import Navbar from './Components/Navbar/Navbar';
 import Hero from './Components/Navbar/Hero/Hero';
import Programs from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/about/About';
import Campus from './Components/Campus/Campus';
import Test from './Components/Test/Test';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Video from './Components/Video/Video';
const App = () => {

const [playState, setplayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle="Our PROGRAM" title="What we Offer"/>
      <Programs/>
      <About setplayState={setplayState}/>
      <Title subTitle="Gallery" title="Campus photos"/>
      <Campus />
      <Title subTitle="TESTIMONIALS" title="What Student Says"/>
      <Test />
      <Title subTitle="Contact Us" title="Get in Touch"/>
      <Contact />
      <Footer/>
      </div>
      <Video playState={playState} setplayState={setplayState} />
    </div>
  )
}

export default App
