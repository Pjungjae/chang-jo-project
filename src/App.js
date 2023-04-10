import Topbar from './componets/topbar/Topbar'
import Sidebar from './componets/sidebar/Sidebar'
import './app.css'
import Home from './pages/home/Home'

function App(){
  return(
     <div className="App">
      <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
       </div>
      </div>
  )
}

export default App
