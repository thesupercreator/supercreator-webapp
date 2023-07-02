import './App.css'
import { Route, Routes } from "react-router-dom";
import Designer from "./pages/Designer.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designer" element={<Designer />} />
        </Routes>
    </>
  )
}

export default App
