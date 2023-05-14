import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './pages/HeaderLayout';
// import './App.css';
import Home from './pages/Home';
import JobDetailPage from './pages/JobDetailPage';
import SignUpPage from './components/auth/SignUpPage';

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />} >
        <Route index element={<Home />}/>
        <Route path='/job/:jobId' element={<JobDetailPage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
