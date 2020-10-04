import React from 'react'
import Card from './card/Card'
import './App.css'
import Mega from './mega/Mega'

export default _ =>
  <div className='app'>
    <Card titulo='Megasena' color='#DD0'>
      <Mega quantidadeInicial={6}/>
    </Card>
  </div>