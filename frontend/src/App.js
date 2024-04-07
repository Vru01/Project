// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './Components/Form';
import View from './Components/View';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/result' element={<View/>}/>
      </Routes>
    </Router>
  );
}

export default App;
