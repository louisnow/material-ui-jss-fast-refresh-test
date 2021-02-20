import * as React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import { ComponentC } from './base'
import { ComponentD } from './base'


function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentD />
    </div>
  );
}

export default App;
