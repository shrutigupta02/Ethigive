import Homepage from "./pages/Homepage"
import Projects from "./pages/Projects"
import AboutUs from "./pages/AboutUs"
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Homepage/>}/>
          <Route exact path = "/projects" element={<Projects/>}/>
          <Route exact path = "/us" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
