import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { SimpleForm } from './components/useEffect/SimpleForm';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomerHook } from './components/useState/CounterWithCustomerHook';
import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <HookApp></HookApp> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomerHook/> */}
    <SimpleForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

