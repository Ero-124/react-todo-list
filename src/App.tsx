import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";

const App: React.FC = () => {
  const REPO_NAME: string = "/react-todo-list";

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
