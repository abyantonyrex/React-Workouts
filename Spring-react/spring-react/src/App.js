import './App.css';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { NavBar } from './components/NavBar';
import { Table } from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewPage } from './components/viewPage';

function App() {
  return (
    <div className="App bg-dark text-white vh-100">
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Table/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path="/view/:id" element={<ViewPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
