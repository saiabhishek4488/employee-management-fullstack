
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import Counter from './Counter';
import FirstClass from './FirstClass';
import PropsClassExample from './PropsClassExample';
import PropsFunctional from './PropsFunctional';
import ReactCss from './ReactCss';
import ConditionalRendering from './ConditionalRendering';
import ClassLifeCycle from './ClassLifeCycle';
import AxiosExample from "./AxiosExample";
import HooksExample from "./HooksExample";
import HooksExample1 from "./HooksExample1";
import UseMemoExample from './UseMemoExample';
import UseReducer from './UseReducer';
import React from 'react';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';
import UseFormExample from './UseFormExample';
import UseFormExample1 from './UseFormExample1';
import Routing from './Routing';


function App() {
  return (
    <div>

      <FunctionalComponent />

      <h1>First React Application</h1>

      <h3>Java full stack project</h3>

      <FunctionalComponent />

      <Counter />

      <FirstClass />

      <PropsClassExample
        trainer1="srikanth"
        trainer2="viswanath"
      />

      <PropsFunctional
        trainer1="viswanth"
        trainer2="srikanth"
      />

      <ReactCss />

      <ConditionalRendering />

      <ClassLifeCycle />

      <AxiosExample />

      <HooksExample />

      <HooksExample1 />

      <UseMemoExample />
      <UseReducer />
      <ThemeContext.Provider value="Dark">

      <Dashboard />
      </ThemeContext.Provider>
      <UseFormExample/>
      <UseFormExample1/>
      <Routing />

   

    </div>
  );
}

export default App;