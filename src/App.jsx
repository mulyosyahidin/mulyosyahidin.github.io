import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import WorkPage from "./Pages/WorkPage";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/works" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
