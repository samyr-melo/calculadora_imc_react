import React, { useState } from 'react'
import Button from './componentes/button'
import './form.css'

function Form({calcImc}) {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }//input aceita somente número, ignora espaços vazios

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value);//acessa o valor atual de um campo de input no momento em que o evento acontece. 
        setHeight(updateValue);//atualiza o estado inicial height
    }//função que recebe e atualiza a entrada de input sempre mantendo a versão mais recente da tecla digitada

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setWeight(updateValue);
    }

    const cleanForm = (e) => {
        e.preventDefault();//impede o carregamento da pagina após o diparo de um botão seja <a> ou <button type ="submit">.
                        //Funciona como um 'botão de parar' para eu executar minha própria lógica.
        setHeight('');
        setWeight('');
    }



  return (
    <div className="calc-container">
        <h2>Calculadora de IMC</h2>
        <form  id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder='Exemplo 1,75'
                    onChange={(e) => handleHeightChange(e)}
                    value={height}
                    />
                    
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder='Exemplo 75,5'
                    onChange={(e) => handleWeightChange(e)}
                    value={weight}
                    />
                </div>                
            </div>
            <div className="action-control">
                <Button 
                id="calc-btn" 
                text="Calcular" 
                action = {(e) => calcImc(e, height, weight)}
                />
                <Button id="clear-btn" text="Limpar" action = {cleanForm}/> 
            </div>
        </form>
    </div>
  )
}

export default Form
