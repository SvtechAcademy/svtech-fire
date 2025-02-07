import { Routes, Route, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Home from './components/Home/Home';
import Demo from './components/Demo/Demo';
import HomeHeader from './components/Home/HomeHeader';
import DemoHeader from './components/Demo/DemoHeader';
import { BlogContext } from './Context/Context';

function App() {
  const { currentUser } = useContext(BlogContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/Home');
    } else {
      navigate('/Demo');
    }
  }, [currentUser, navigate]);

  return (
    <>
      {currentUser ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Demo" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
