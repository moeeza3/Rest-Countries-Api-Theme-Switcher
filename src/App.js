import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Country from './pages/Country';
import Main from './components/Main';
import { HashRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
     <Router>
           
       
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          
          <Route path="/country/:name" element={<Country/>}></Route>
          
        </Routes>
         </Router>
  

    </div>
  );
}

export default App;
