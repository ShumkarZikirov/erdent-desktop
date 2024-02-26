import { Route, Routes } from "react-router-dom";
import Home from "../home";
import AboutUs from "../aboutUs";
import Services from "../services/services";
import Logins from "../logins";
import Register from "../../components/login/register/register";
import Enroll from "../../components/enroll";
import Profile from "../../components/user/profile";
import Doctors from "../doctors-page";
import DetailsDoctor from "../../components/details-doctor";
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path={'/doctors'} element={<Doctors/>}/>
      <Route path='/sing-in' element={<Logins />} />
      <Route path='/auth/register' element={<Register />} />
        <Route path={'/enroll'} element={<Enroll/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/details'} elment={<DetailsDoctor/>}/>
    </Routes>
  )
}
export default Main