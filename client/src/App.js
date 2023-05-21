import './App.css';
import Input from './components/Input';
import React, {fragment} from 'react';
import ListStuff from './components/ListStuff';

function App() {
  return (
    <div className="App">
      <Input></Input>
      <ListStuff></ListStuff>
    </div>
  );
}

export default App;
