import React from "react";
import Login from "./pages/loginPage/login";
import Landing from "./pages/landingpg/landing";
import { Routes, Route } from 'react-router-dom';
import TaskPage from "./pages/TaskPage/TaskPage";

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/taskPage" element={<TaskPage />} />
         </Routes>
      </>
   );
  };
  

export default App;