import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import logo from './logo.svg';
import classes from './App.module.css';
import Login from './Pages/Login/Login';
import AdminDash from './Pages/AdminDash/AdminDash';
import ExecDash from './Pages/ExecDash/ExecDash';
import Topbar from './Components/Topbar/Topbar';


function App() {

  const [loginStatus, setloginStatus] = useState(false)

  const handleuserLogin = () => {
    localStorage.setItem('loginStat', true);
    // alert("true")
    setloginStatus( true )
  }

  const handleuserLogout = () => {
    localStorage.setItem('loginStat', false);
    // alert("false")
    setloginStatus( false )

  }
  return (
    <div className="App">
      <Router>
      <Topbar loginStatus={loginStatus} handleuserLogout={handleuserLogout}/>
        <Switch>
         
<Route exact path="/"  render={(props)=>{
               return (
                loginStatus===true && localStorage.getItem("test-admin")==true?
                <Redirect to="/dashboard/admin" /> :
                <Login handleuserLogin={handleuserLogin} {...props} />
              )
            }}/>
                     
<Route exact path="/"  render={(props)=>{
               return (
                loginStatus===true && localStorage.getItem("test-sales")==true?
                <Redirect to="/dashboard/executive" /> :
                <Login handleuserLogin={handleuserLogin} {...props} />
              )
            }}/>



<Route exact path="/dashboard/executive"  render={()=>{
               return (
                loginStatus===false && localStorage.getItem("test-sales")==false?
                <Topbar /> :
                <ExecDash/>
              )
            }}/>


{/* <Route exact path='/dashboard/admin'  render={()=>{
               return (
                loginStatus===false && localStorage.getItem("test-admin")==false?
              <AdminDash/> :
                <Redirect to='/dashboard/admin'/>
              )
            }}/>  */}

<Route exact path="/dashboard/admin"  render={()=>{
               return (
                loginStatus===false && localStorage.getItem("test-admin")==false?
                <Topbar/> :
                <AdminDash/>
                )
              }}/> 
  
          {/* <Route exact path='/dashboard/admin' component={AdminDash} /> */}
          {/* <Route exact path='/dashboard/executive' component={ExecDash} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
