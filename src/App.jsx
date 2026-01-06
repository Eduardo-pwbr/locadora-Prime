import React from 'react';
import './index.css';
import RotasApp from './routes.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} position="top-right" />
       <RotasApp/>
    </div>
      
  
   
  );
}

export default App;
