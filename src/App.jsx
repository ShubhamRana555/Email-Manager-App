// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Update />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
