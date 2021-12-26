/*
 * @Author: zhy
 * @Date: 2021-10-22 17:29:46
 * @Description:
 * @LastEditTime: 2021-10-22 18:46:02
 */
import { AuthenicatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import React from "react";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.css";
const App = () => {
  const {user} = useAuth();
  return (
    <div className="App">
      111
      {user ? <AuthenicatedApp></AuthenicatedApp> : <UnauthenticatedApp></UnauthenticatedApp>}
    </div>
  );
}

export default App;
