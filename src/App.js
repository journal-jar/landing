// import logo from './logo.svg';
// import './App.css';
// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import Home from './components/home/Home';
// import Privacy from './components/privacy/Privacy';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         {/* <Route path="privacy" element={<Privacy />} /> */}
//         {/* <Route path="*" element={<a href="/">Home</a>} /> */}
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveProvider from './utils/hooks/responsive';

import Home from './components/home/Home';
import Privacy from './components/privacy/Privacy';

function App() {
  return (
    <div>
      <ResponsiveProvider>
        <BrowserRouter>
          <Routes>
            {/* Layout is the page wrapper component that contains nav and footer */}
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* Add rest of the page here */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ResponsiveProvider>
    </div>
  );
}

export default App;
