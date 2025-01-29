import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import ChangePasswordPage from './ChangePasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;