import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
