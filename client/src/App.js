import HomePage from"./pages/HomePage/HomePage"
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import LoginPage from "./pages/HomePage/LoginPage/LoginPage";
import SignupPage from "./pages/HomePage/SignupPage/SignupPage";

function App() {
  return <Router>
  <div className="app ">
    <Routes>
      
          
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      {/* <Route path="/register" element={user ? <Navigate replace to="/" />:<Register/>}/>  */}
      <Route exact path="/" element={<HomePage/>}/>       
    </Routes>
  </div>
</Router>
}

export default App;
