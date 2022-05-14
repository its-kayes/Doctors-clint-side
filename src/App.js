import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Components/Home/Home';
import About from './Page/Components/About/About';
import Appointment from './Page/Components/Appointment/Appointment';
import Contact from './Page/Components/Contact/Contact';
import Reviews from './Page/Components/Reviews/Reviews';
import Login from './Page/Components/Login/Login';
import Footer from './Page/Shared/Footer';
import Register from './Page/Components/Login/Register';
import RequireAuth from './Page/Components/Login/RequireAuth';


function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Home> </Home>}> </Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
      </Routes>
      <Footer> </Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
