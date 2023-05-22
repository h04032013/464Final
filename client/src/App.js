import './App.css';
import Input from './components/Input';
import React, {Fragment} from 'react';
import ListStuff from './components/ListStuff';

function App() {
  return (
    <Fragment>
    <div className="App">
      <Input></Input>
      <ListStuff></ListStuff>
    </div>
    </Fragment>
  );
}

export default App;
