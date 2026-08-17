import { useState } from 'react';
import {createBrowserRouter, Route, RouterProvider} from 'react-router';
import { createRoutesFromElements } from 'react-router';
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import RootLayout from './layout/RootLayout.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='Contact' element={<Contact />}/>
        <Route path='Services' element={<Services />}/>
        <Route path='About' element={<About />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App