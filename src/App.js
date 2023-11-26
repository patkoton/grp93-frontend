import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './components/NotFound';
import Customers from './pages/Customers';



function App() {

  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/customer' element={<Customers/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
