import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Translate from './pages/Translate/Translate';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
