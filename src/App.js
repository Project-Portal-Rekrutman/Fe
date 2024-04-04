import logo from './logo.svg';
import './App.css';
import Landing from "./components/page/landing/Index.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";  
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}>
        {/* <Route index element={<Dashboard/>} />
        <Route path="demo" element={<Demo/>} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
