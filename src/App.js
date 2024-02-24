import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ResponsiveProvider from './utils/hooks/responsive';

import Home from './components/home/Home';
import Privacy from './components/privacy/Privacy';

function App() {
  return (
    <div>
      <ResponsiveProvider>
        <HashRouter>
          <Routes>
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
            </Route>
          </Routes>
        </HashRouter>
      </ResponsiveProvider>
    </div>
  );
}

export default App;
