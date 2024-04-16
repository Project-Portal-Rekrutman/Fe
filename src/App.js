// import logo from './logo.svg';
import './App.css';
import Landing from "./components/page/landing/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import IndexDetail from './components/page/detail/Index.js';
import Register from "./components/page/register";
import Login from "./components/page/login";
import Dashboard from "./components/page/admin/dashboard";
import MyApp from "./components/page/myapp";
import Progress from "./components/page/progress";
import Layout from "./components/page/layout";
import ListVacancy from './components/page/admin/vacancy/index.js';
import ListApplication from "./components/page/admin/application";
import ListInterview from './components/page/admin/interview/index.js';
import FormVacancy from './components/page/admin/form-vacancy/index.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/index-detail/:id" element={<IndexDetail />} />
      <Route path="/my-app" element={<MyApp />} />
      <Route path="/progress/:id" element={<Progress />} />

      <Route path="/admin" element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        {/* <Route path="demo" element={<Demo/>} /> */}
        {/* <Route path="/app-jobseeker" element={<ListApp />} /> */}
      <Route path="/admin/interview" element={<ListInterview />} />
      {/* <Route path="/grading" element={<ListGrading />} /> */}
      <Route path="/admin/vacancy" element={<ListVacancy />} />
      <Route path="/admin/application" element={<ListApplication />} />
      <Route path="/admin/form-vacancy" element={<FormVacancy />} />
      </Route>
      {/* <Route path="/admin" element={<Layout />} /> */}
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import LayoutOne from './components/page/layout';
// import LayoutTwo from './components/page/landing';
// import HomePage from './components/page/homepage';
// import AboutPage from './components/page/homepage';
// import Contact from "./components/page/contact";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/about" element={<LayoutTwo><AboutPage /></LayoutTwo>} />
//         <Route path="/" element={<LayoutOne><Contact /></LayoutOne>} />
//       </Routes>
//     </BrowserRouter> 
//   );
// };

// export default App;
