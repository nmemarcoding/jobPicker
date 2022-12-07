import HomePage from"./pages/HomePage/HomePage"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginPage from "./pages/HomePage/LoginPage/LoginPage";
import SignupPage from "./pages/HomePage/SignupPage/SignupPage";
import JobPage from "./pages/HomePage/JobPage/JobPage";
import PostJobPage from "./pages/HomePage/PostJobPage/PostJobPage";
import ProfilePage from "./pages/HomePage/ProfilePage/ProfilePage";
import SearchPage from "./pages/HomePage/SearchPage/SearchPage";
import { useStateValue } from '../src/StateProvider';
import OwnerJobs from "./pages/HomePage/OwnerJobs/OwnerJobs";
import YourOrders from "./pages/HomePage/YourOrders/YourOrders";

function App() {
   const [{user},dispatch] = useStateValue();
  return <Router>
  <div className="app ">
    <Routes>
      
          
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      {<Route path="/job/:id" element={<JobPage/>}/>}
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/search/:search" element={<SearchPage/>}/>
      <Route path="/search/*" element={<SearchPage/>}/>
      
      {/* <Route path="/register" element={user ? <Navigate replace to="/" />:<Register/>}/>  */}
      {user?<Route  path="/postjob" element={<PostJobPage/>}/>:<Route path="/postjob" element={<LoginPage/>}/>} 
      {user?<Route  path="/yourjobs" element={<OwnerJobs/>}/>:<Route path="/yourjobs" element={<LoginPage/>}/>} 
      {user?<Route  path="/yourorders" element={<YourOrders/>}/>:<Route path="/yourorders" element={<LoginPage/>}/>}

      <Route exact path="/" element={<HomePage/>}/>    
      
    </Routes>
  </div>
</Router>
}

export default App;
