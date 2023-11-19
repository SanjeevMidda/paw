import React from 'react'

function Sound({image, sound, text}) {

    function playSound(){

        let audio = new Audio(sound)

        audio.play();
    }

  return (
    <div className="soundContainer" onClick={playSound}>
        <img src={image} alt="catFood" />
        <h3>{text}</h3>
    </div>
  )
}

export default Sound