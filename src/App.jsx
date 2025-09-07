import Navbar from './components/Common/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Common/Footer.jsx';
import Cart from './components/Cart/Cart.jsx';
// import LoginPage from './components/Login/LoginPage.jsx';
// import RegisterPage from './components/Register/RegisterPage.jsx';

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Cart></Cart>
      {/* <LoginPage></LoginPage> */}
      {/* <RegisterPage></RegisterPage> */}
      <Footer></Footer>
    </>
  )
}

export default App