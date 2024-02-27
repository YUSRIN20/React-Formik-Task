import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Create from './Components/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookDetails from './Components/BookDetails';

const App = () => {
  const [id,SetId] = useState(0) // This id is variable id this id default value is 0
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home SetId={SetId} />}/>
        <Route path='/edit/:id' element={<Edit id={id} />}/>
        <Route path= '/create' element={<Create />}/>
        <Route path='/bookdetails/:id' element={<BookDetails id={id} />}/>
      </Routes>
      <div>
        <ToastContainer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;