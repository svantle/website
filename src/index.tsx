import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage.tsx';

import Terms from './pages/legal/terms.tsx';
import Privacy from './pages/legal/privacy.tsx';
import Cookies from './pages/legal/cookies';

import NotFound from "./pages/notfound.tsx";

import './stylesheets/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/legal/terms" element={<Terms />} />
                <Route path="/legal/privacy" element={<Privacy />} />
                <Route path="/legal/cookies" element={<Cookies />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
