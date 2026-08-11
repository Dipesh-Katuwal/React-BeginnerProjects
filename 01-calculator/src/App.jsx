import { useState } from 'react'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import InputField from './components/InputField'

function App() {

  const [calval,setCalval]= useState("");
  const onButtonClick= (btnName)=>{
    
    if(btnName==='C'){
      setCalval("");
    }else if(btnName==='='){
      let res= eval(calval);
      setCalval(res);
    }else{
      const newValue=calval+btnName;
      setCalval(newValue);
    }
  };
  return (
    <>
    <div className='calc-container'>
      <h3 className='heading'>Calculator</h3>
      <InputField displaycal={calval}></InputField>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
    
    </>
  )
}

export default App
