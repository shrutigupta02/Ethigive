import Homepage from "./pages/Homepage"
import Projects from "./pages/Projects"
import AboutUs from "./pages/AboutUs"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from "./pages/Register";
import Project from "./pages/Project";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Homepage/>}/>
          <Route exact path = "/projects" element={<Projects/>}/>
          <Route exact path = "/us" element={<AboutUs/>}/>
          <Route exact path = "/register" element={<Register/>}/>
          <Route path="/projects/:id" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
