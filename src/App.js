import Topbar from './componets/topbar/Topbar'
import Sidebar from './componets/sidebar/Sidebar'
import './app.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import Messages from './Quick/messages/Messages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewUser from './pages/newUser/NewUser'
import Report from './Quick/report/Report'
import Post from './Quick/report/post/Post'


function App(){
  return(
    <Router>
      <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/users" element={<UserList />} /> 
            <Route path="/user/:userId" element={<User />} />       
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/report' element={<Report />} />
            <Route path='/post' element={<Post />}/>
          </Routes>
       </div>
      </Router>
  )
}

export default App
