import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Header />

    <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
    </Routes>
   </Router>
      
  );
}

export default App;
