import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import OrgProfile from './components/orgProfile';
import UserProfile from './components/userProfile';
import Jobs from './components/jobs';
import Status from './components/status';
import PostAJob from './components/postAJob';
import Profile from './components/profile';
import Apply from './components/apply';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/orgprofile" element={<OrgProfile />}/>
            <Route exact path="/userprofile" element={<UserProfile />}/>
            <Route exact path="/jobs" element={<Jobs />}/>
            <Route exact path="/status" element={<Status />}/>
            <Route exact path="/post" element={<PostAJob />}/>
            <Route exact path="/profile" element={<Profile />}/>
            <Route exact path="/apply/" element={<Apply />}/>
        </Routes>
    </Router>
  );
}

export default App;