import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Blog from './Components/Blog/Blog';
import AboutMe from './Components/AboutMe/AboutMe';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
