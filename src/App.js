import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Landing from './pages/landing/Landing';
import { Login } from './pages/login/Login';

import PrivateRoute from './utils/PrivateRoute';
import { Rider } from './pages/dashboard/Rider';
import { Driver } from './pages/dashboard/Driver';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/driver'
          element={<PrivateRoute>{<Driver />}</PrivateRoute>}
        />
        <Route
          path='/rider'
          element={<PrivateRoute>{<Rider />}</PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
