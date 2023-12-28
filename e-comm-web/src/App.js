import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './Components/ProtectedRoute';  // Assuming ProtectedRoute is a default export
import { Login } from './Components/LoginPage/Login';
import { Home } from './Components/Home';



function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
