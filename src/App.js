import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import Invoice2 from './pages/Dasboard2';
import BusinessRegister from './pages/BusinessRegister';
import BusinessLogin from './pages/BusinessLogin';
import ClientLogin from './pages/ClientLogin';
import BusinessForgotPassword from './pages/BusinessForgotPassword';
import NotFound from './components/NotFound';
import Customers from './pages/Customers';



function App() {

  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/invoice2' element={<Invoice2/>}/>
        <Route path='/customer' element={<Customers/>}/>
        <Route path='/' element={<BusinessRegister/>}/>
        <Route path='/login' element={<BusinessLogin/>}/>
        <Route path='/client-login' element={<ClientLogin/>}/>
        <Route path="/forgot-password" element={<BusinessForgotPassword/>} />
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
