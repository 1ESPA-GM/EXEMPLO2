import {useState} from 'react'
import React from 'react'

const Contador = () => {

    //HOOKS-useState - Manipula o estado da variavel
    const [contador, setContador]=useState(0);

  return (
    <>
      <h1>meu contador</h1>

      <p>Você Clicou: {contador}</p>
      <button onClick={()=>setContador(contador +1)}>Aumentar</button>
      <button onClick={()=>setContador(contador -1)}>Diminuir</button>

    </>
  )
}

export default Contador
