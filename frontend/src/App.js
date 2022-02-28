import Homepage from '../src/candidate/homepage';
import Profile from './candidate/profile';
import Login from './login';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Status from './candidate/status';
import About from './candidate/about';
import Mcq from './candidate/mcq';
import Edit from './candidate/edit';
import Addjob from './HR/addjob';
import List from './HR/candidate';
import Asatus from './HR/a_status';
import Aprofile from './HR/a_profile';
import Usign from './candidate/usignup';
import Asign from './HR/asignup';
import Aabout from './HR/a_about';

function App() {

  const navigate = useNavigate();

  return (
    <Routes>
      {/* candiadte */}
      <Route path='/' element={<Login nav={navigate} />} /> 
      <Route path='usignup' element={<Usign nav={navigate}/>} /> 
      <Route path='/home' element={<Homepage nav={navigate}/>} />
      <Route path='/mcq' element={<Mcq/>} />
      <Route path='/profile' element={<Profile  nav={navigate}/> }/>
      <Route path='/edit' element={<Edit nav={navigate}/>} />
      <Route path='/status' element={<Status/>} />
      <Route path='/about' element={<About/>} />

      {/* Admin */}
      <Route path='/addjob' element={<Addjob/>} />
      <Route path='/asignup' element={<Asign nav={navigate} />} />
      <Route path='/userlist' element={<List nav={navigate} />} />
      <Route path='/a_status' element={<Asatus/>} />
      <Route path='/a_profile' element={<Aprofile/>} />
      <Route path='/a_about' element={<Aabout/>} />

    </Routes>
  );
}

export default App;
