import { useState } from 'react'
import './App.css'
import Button from './componentes/Button'
import Form from './Form'
import ImcTable from './componentes/ImcTable';
import { data } from './data/data';


function App() {
  
  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');




  //função para calcular o imc e renderizar o ImcTable.
 const calcImc = (e, height, weight) => {
  e.preventDefault();
  
  const heightFloat = +height.replace("," , ".");
  const weightFloat = +weight.replace("," , ".");

  const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

  setImc(imcResult);

  data.forEach((item) => {
    
    if(imcResult >= item.min && imcResult <= item.max) {
      setInfo(item.info);
      setInfoClass(item.infoClass);
    }
  })
 }

 const resetCalc = (e) => {
  e.preventDefault();
  setImc('');
  setInfo('')
  setInfoClass('');
 }

  return (
    <>
      <div className='container'>
        {!imc ? (<Form calcImc = {calcImc}/>) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />)}
        {/* Se não tiver imc, mostre o componente Form, e se tiver imc mostre ImcTable */}
      </div>
    </>
  )
}

export default App
