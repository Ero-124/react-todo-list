import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';

const REPO_NAME = "/todo-list";

const App: React.FC = () => {

  return (
    <BrowserRouter basename={REPO_NAME}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
