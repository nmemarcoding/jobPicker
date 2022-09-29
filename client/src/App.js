import HomePage from"./pages/HomePage/HomePage"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginPage from "./pages/HomePage/LoginPage/LoginPage";
import SignupPage from "./pages/HomePage/SignupPage/SignupPage";
import JobPage from "./pages/HomePage/JobPage/JobPage";
import PostJobPage from "./pages/HomePage/PostJobPage/PostJobPage";

function App() {
  return <Router>
  <div className="app ">
    <Routes>
      
          
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/job/:id" element={<JobPage/>}/>
      {/* <Route path="/register" element={user ? <Navigate replace to="/" />:<Register/>}/>  */}
      <Route  path="/postjob" element={<PostJobPage/>}/>   
      <Route exact path="/" element={<HomePage/>}/>    
      
    </Routes>
  </div>
</Router>
}

export default App;
