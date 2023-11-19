import { useState } from 'react';
import './index.css';
import pawPrint from "./icons/paw.png"
import Sound from './components/Sound';

// images
import star from "./icons/star.png"
import flipflops from "./icons/flipflops.svg"
import lolly from "./icons/lolly.svg"
import ball from "./icons/ball.svg"
import coconut from "./icons/coconut.png"

// sounds
import guji from "./audio/Guji.m4a"
import comeOn from "./audio/ComeOn.m4a"
import chincha from "./audio/Chincha.m4a"
import mashida from "./audio/Mashida.m4a"
import gozo from "./audio/Gozo.m4a"

function App() {

  const [paw, setPaw] = useState({});

  function movePaw(e){
    setPaw({left: e.clientX, top: e.clientY, position:"absolute"})
  }

  return (
    <div className="App" onMouseMove={movePaw}>
      <img src={pawPrint} alt="" style={paw} className='paw'/>

      <div className="container">
        <Sound image={star} sound={guji} text="guji"/>
        <Sound image={flipflops} sound={comeOn} text=" Come onnnn!!!!"/>
        <Sound image={lolly} sound={chincha} text="Chincha!"/>
        <Sound image={ball} sound={mashida} text="Ne! Mashida"/>
        <Sound image={coconut} sound={gozo} text="GOZO!!!"/>
      </div>
    </div>
  );
}

export default App;

// paw follow mouse - DONE
// create sounds - DONE
// create sound board - DONE
// sound plays when clicked - DONE