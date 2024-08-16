
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import User from './Register';
import Home from './Home';
import Login from './Login';
import Schedule from './Schedule';
import UpdateSchedule from './UpdateSchedule';
import Footer from './Footer';
function App() {

  return (

    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/register' element={<User></User>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/schedule' element={<Schedule />}></Route>
          <Route path='/updateSchedule' element={<UpdateSchedule></UpdateSchedule>}></Route>

        </Routes>
        <Footer></Footer>

      </BrowserRouter>


    </div>
  );
}

export default App;
