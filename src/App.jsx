import React, { useState } from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
import './App.css'
const App = () => {
  const {speak,voices}=useSpeechSynthesis();
  const [input,setInput]=useState("");
  const [voiceIndex,setVoiceIndex]=useState("");
  const [rate,setRate]=useState(0.1);
  function handlespeak(){
    speak({text:input,rate:rate,voice:voices[voiceIndex]});
  }
  return (
    <div>
      <h1>React text to speech app</h1>
      <textarea rows={5} cols={50}placeholder='enter your text here'onChange={(e)=>setInput(e.target.value)}/><br/>
      <select style={{width:"100px"}}value={voiceIndex||''}onChange={(e)=>setVoiceIndex(e.target.value)}>
        <option value="">default</option>
        {voices.map((item,index)=>(
          <option key={item.name}value={index}>{item.name}</option>
        ))}
      </select>
      <div>
        <input type='range'min={0.1}max={1}step={0.01}value={rate}onChange={(e)=>setRate(e.target.value)}/>
      </div>
      <h2>Current speech rate is {rate}</h2>
      <button onClick={()=>handlespeak()}>speak</button>
    </div>
  )
}

export default App