import React from 'react';
import Navbar from './components/navbar'
import Rotas from './rotas'

function App() {
  return (
    <div className="App">
      <>
        <div className="container">
          <Navbar />
          <Rotas />  
        </div>
      </>
    </div>
  );
}

export default App;
