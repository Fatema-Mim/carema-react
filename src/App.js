import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import NoFound from './component/NoFound/NoFound';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Purchase from './component/Purchase/Purchase';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AllProuct from './component/AllProduct/AllProuct';
import Dashboard from './component/Dashboard/Dashboard';
import AdminRoute from './component/AdminRoute/AdminRoute';
import AdminDashBoard from './component/AdminDashBoard/AdminDashBoard';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>

            <Route path="/home" >
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register" >
              <Register></Register>
            </Route>
            
            <PrivateRoute path="/product/:productId" >
              <Purchase></Purchase>
            </PrivateRoute>
            
            <Route path="/allProduct" >
              <AllProuct></AllProuct>
            </Route>
            
            
            <PrivateRoute path="/dashboard" >
              <Dashboard></Dashboard>
            </PrivateRoute>
            <AdminRoute path="/adminDashboard" >
              <AdminDashBoard></AdminDashBoard>
            </AdminRoute>
            
            
            {/* <Route path="/" ></Route> */}
            <Route path="*" >
              <NoFound></NoFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
