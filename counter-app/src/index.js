import React from 'react'
import ReactDom from 'react-dom'
import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#root');

// ReactDom.render(<PrimeraApp saludo ="Soy leo" />, divRoot);
ReactDom.render(<CounterApp valor={10}></CounterApp>, divRoot);