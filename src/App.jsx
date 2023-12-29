
import Navbar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about";
import Menu from "./components/menu";
import Booking  from "./components/booking";
import Footer  from "./components/footer";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function App() {
  return (
    <div>
       <Navbar />
        <Main />
        <About />
        <Menu />
        <Booking />
        <Footer />


    </div>
   
  );
}