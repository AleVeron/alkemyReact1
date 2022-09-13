import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import List from "./components/List"

function App() {
  return (
    <div className="App">


      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/list" element={<List/>} />

      </Routes>


    </div>
  );
}

export default App;
