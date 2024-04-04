import logo from './logo.svg';
import './App.css';
import Landing from "./components/page/landing/Index.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import IndexDetail from './components/page/detail/Index.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/detailvacancy/:id" element={<IndexDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
