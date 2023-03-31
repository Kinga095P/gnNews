import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from './components/Container';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Container />}></Route>
        <Route path='/news' element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
