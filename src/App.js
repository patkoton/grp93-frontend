import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './components/NotFound';

function App() {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
