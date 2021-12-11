import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/project-list";

export const AuthenicatedApp = () => {
  const {loginOut} = useAuth();
  return <div>
    <button onClick={loginOut}>登出</button>
    <ProjectListScreen></ProjectListScreen>
  </div>
}