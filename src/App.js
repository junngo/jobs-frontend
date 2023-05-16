import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './pages/HeaderLayout';
// import './App.css';
import Home from './pages/Home';
import JobDetailPage from './pages/JobDetailPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';


function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />} >
        <Route index element={<Home />}/>
        <Route path='/job/:jobId' element={<JobDetailPage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
