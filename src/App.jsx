import Home from "./component/Home/Home"
import Medical from "./component/Medical/Medical";
import About from "./component/AboutPage/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Educate from "./component/Education/Educate";
import InsuranceBanner from "./component/Insurance/InsuranceBanner";
import AllNews from "./component/News/AllNews";
import Entrepreneurship from "./component/Entrepreneurship/Entrepreneurship";
import AuthForm from "./component/Authform/AuthForm";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home/>
        }/>
        <Route path="/medical" element={
          <Medical/>
        } />
        <Route path="/about" element={
          <About/>
        } />
        <Route path="/education" element={
          <Educate/>
        } />
        <Route path="/insurance" element={
          <InsuranceBanner/>
        } />
        <Route path="/allnews" element={
          <AllNews/>
        } />
        <Route path="/entrepreneurship" element={
          <Entrepreneurship/>
        } />
        <Route path="/login" element={
          <AuthForm/>
        } />
        
      </Routes>
    </Router>
      
    
  )
}

export default App
