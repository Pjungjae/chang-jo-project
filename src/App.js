import Topbar from './componets/topbar/Topbar'
import Sidebar from './componets/sidebar/Sidebar'
import './app.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App(){
  return(
    <Router>
      <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />        
          </Routes>
       </div>
      </Router>
  )
}

export default App
