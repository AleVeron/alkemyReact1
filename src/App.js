import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import List from "./components/List"
import Header from './components/Header'
import Footer from './components/Footer'
import Detail from './components/Detail'
import './App.css'

function App() {


  return (
    
    <div className="App d-flex flex-column justify-content-between">

      <Header />

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
