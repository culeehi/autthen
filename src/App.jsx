import './App.css';
import Login from './components/Login/Login';
import ChatRom from './components/ChatRom/ChatRom';

import { Route, Routes, Link } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

function App() {
   return (
      <AuthProvider>
         <div className="App">
            <div>
               <ul className="navbar">
                  <li className="navbar-items">
                     <Link to="/"> Home </Link>
                  </li>
                  <li className="navbar-items">
                     <Link to="/chatrom"> ChatRom </Link>
                  </li>
               </ul>
            </div>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/chatrom" element={<ChatRom />} />
            </Routes>
         </div>
      </AuthProvider>
   );
}

export default App;
