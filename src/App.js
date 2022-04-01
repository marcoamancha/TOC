import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import  Admin  from './components/clinic/Admin';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Admin' element={<Admin />} />
          </Routes>
      </BrowserRouter>  
  );
}

export default App;
