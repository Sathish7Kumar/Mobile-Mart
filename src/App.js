import  React , { useEffect,  useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Mobiles from './components/Mobiles';
import Cart from './components/Cart';
import Home from './components/Home';
import axios from 'axios'
import Footer from './components/Footer';
const url = "https://ecommerceappbackend-itob.onrender.com"
export const MobileContext = React.createContext();

function App() {

  const [data , setData ] = useState([]);
  const [cart , setCart ] = useState([]);
  const [cartValue , setCartValue] = useState(0);

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async() => {
    const res = await axios.get(`${url}/products`)
    console.log(res.data)
    setData(res.data)
  }

  return (
    <>
    <Router>
      <MobileContext.Provider value={{data,cart,setCart,cartValue,setCartValue,url}} >
      <Navbar/>
      <Routes>
        <Route path='/mobiles' element={<Mobiles/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </MobileContext.Provider>
    </Router>
    </>
  );
}

export default App;

