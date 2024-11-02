import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ResponsiveProvider from './utils/hooks/responsive';

import Home from './components/home';
import Privacy from './components/privacy';
import Support from './components/support';

function App() {
  return (
    <div>
      <ResponsiveProvider>
        <HashRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/support" element={<Support />} />
            </Route>
          </Routes>
        </HashRouter>
      </ResponsiveProvider>
    </div>
  );
}

export default App;
