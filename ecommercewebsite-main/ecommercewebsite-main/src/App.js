import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Open from './screens/Open';
import Hotel from './hotel/Hotel';
import MyOrder from './screens/MyOrder';
import NewOrders from './screens/NewOrders';

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { CartProvider } from './components/ContextReducer';

function App() {
  
  return (
    <CartProvider>

      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/open' element={<Open />} />
            <Route exact path='/createuser' element={<Signup />} />
            <Route exact path='/hoteluser' element={<Hotel />} />
            <Route exact path='/myorder' element={<MyOrder />} />
            <Route exact path='/neworders' element={<NewOrders />} />
          </Routes>
        </div>
      </Router>

    </CartProvider>
  );
}

export default App;
