import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import {Admin} from "../../layouts/admin/admin.component";
import { Main } from "../../layouts/main/main.component";
import { Login } from "../../layouts/login/login.component";
import { Registration } from "../../layouts/registration/registartion.component";
import { User } from "../../layouts/user/user.component";
import "./app.style.sass";

export function App() {
  const [user, setUser] = React.useState({id:'',name:'', email:'', isAdmin:false, isAutorized:false})
  console.log('USER', user)
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} user={user} />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/admin">
          <Admin user={user}/>
        </Route>
        <Route path="/" exact>
          <Main user={user}/>
        </Route>
      </Switch>
    </div>
  );
}
