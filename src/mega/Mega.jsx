import React, { useState } from 'react'
import gerarNumeros from './GerarNumeros'
import './mega.css'

export default props => {

  const [quantidade, setQuantidade] = useState(props.quantidadeInicial || 6)
  const [numerosMega, setNumerosMega] = useState(<div className='home'>Aguardando geração de números...</div>)

  const gerarSpansNumerosMega = _ => {
    setNumerosMega(gerarNumeros(quantidade).map(numero => {
      return (
        <div className='number'>{numero}</div>
      )
    }))
  }

  return (
    <div className='mega'>
      <h2>Sorteie seus números da megasena:</h2>
      <p>Quantos números deseja sortear?</p>

      <input type='number' min='1' max='10'
        value={quantidade}
        onChange={event => {
          setQuantidade(+event.target.value)
          setNumerosMega(gerarNumeros(+event.target.value).map(numero => { return ( <div className='number'>{numero}</div> )}))}}
      />

      <button onClick = { _ => gerarSpansNumerosMega()}>
        Sortear números:
      </button>

      <div className='numbers'>
        {numerosMega}
      </div>
    </div>
  )
}