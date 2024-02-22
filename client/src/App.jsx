import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
          <Home/>
          </>
        }/>
        <Route path="*" element={<NotFound/>}/>
       
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
