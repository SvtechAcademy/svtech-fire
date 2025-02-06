import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Demo from './components/Demo/Demo';
import HomeHeader from './components/Home/HomeHeader';
import DemoHeader from './components/Demo/DemoHeader';

function App() {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState(false); // Example state

  useEffect(() => {
    if (createUser) {
      navigate('/Home');
    } else {
      navigate('/Demo');
    }
  }, [createUser, navigate]);

  return (
    <>
      {createUser ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Demo" element={<Demo />} />
        {/* Other routes */}
      </Routes>
    </>
  );
}

export default App;
