import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './pages/HeaderLayout';
// import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />} >
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
