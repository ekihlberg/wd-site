import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RedirectToDropbox = () => {
  useEffect(() => {
    window.location.href = 'https://www.dropbox.com/request/Tia54XVekUKSzt7lp6mj';
  }, []);
  return null;
};

const RedirectToAnotherLink = () => {
  useEffect(() => {
    window.location.href = 'https://drive.google.com/drive/folders/113JIYmL1RflhM8lX6hs4k1255U3KxxgX?usp=sharing';
  }, []);
  return null;
};

const CustomRoutes = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path="/ladda-upp" element={<RedirectToDropbox />} />
        <Route path="/bilder" element={<RedirectToAnotherLink />} />
        <Route path="/*" element={<div>{children}</div>} /> {/* Render children inside a div */}
      </Routes>
    </Router>
  );
};

export default CustomRoutes;