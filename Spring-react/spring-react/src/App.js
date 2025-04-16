import './App.css';
import { AddUser } from './components/AddUser';
import { NavBar } from './components/NavBar';
import { Table } from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Table/>} />
        <Route path="/add" element={<AddUser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
