import logo from './logo.svg';
import Main from './pages/Main';
import GlobalStyle from './component/GlobalStyle';
import Cart from './component/Cart';
import { useContext } from 'react';
import { CartModal } from './utils/CartModal';
import { Outlet } from 'react-router-dom';
import TopHeader from './pages/TopHeader';
import MobileNavBar from './component/MobileNavBar';


function App() {
  
 const {cartModal} = useContext(CartModal)
  return (
    <>
       <GlobalStyle />
       <TopHeader />
       <Outlet />
       {cartModal &&  <Cart />}
      
    </>
  );
}

export default App;
