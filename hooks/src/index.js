import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomerHooks } from './components/examples/MultipleCustomerHooks';
import { CallbackHook } from './components/memos/CallbackHook';
import { Padre } from './components/tarea-memo/Padre';
import { MemoHook } from './components/memos/MemoHook';
import { Memorize } from './components/memos/Memorize';
import { FormWinthCustomerHook } from './components/useEffect/FormWithCustomerHook';
import { SimpleForm } from './components/useEffect/SimpleForm';
import { Layout } from './components/useLayoutEffect/Layout';
import { FocusScreen } from './components/useRef/FocusScreen';
import { RealExampleRef } from './components/useRef/RealExampleRef';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomerHook } from './components/useState/CounterWithCustomerHook';
import { HookApp } from './HookApp';
import { TodoApp } from './components/useReducer/TodoApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <HookApp></HookApp> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomerHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWinthCustomerHook/> */}
    {/* <MultipleCustomerHooks/> */}
    {/* <FocusScreen/> */}
    {/* <RealExampleRef/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/* <Padre/> */}
    <TodoApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

