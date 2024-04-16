// import logo from './logo.svg';
import './App.css';
import Landing from "./components/page/landing/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import IndexDetail from './components/page/detail/Index.js';
import Register from "./components/page/register";
import Login from "./components/page/login";
import Layout from "./components/page/layout";
import ListEducation from './components/page/resume/index.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/index-detail/:id" element={<IndexDetail />} />
      <Route path="/dashboard" element={<Layout />} />
      <Route path="/education" element={<ListEducation />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
