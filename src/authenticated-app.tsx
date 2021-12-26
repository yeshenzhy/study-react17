import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";
export const AuthenicatedApp = () => {
  const {loginOut} = useAuth();
  return <Container>
    <PageHeader>
      <button onClick={loginOut}>登出</button>
    </PageHeader>
    <Main>
      <ProjectListScreen></ProjectListScreen>
    </Main>
  </Container>
}

const PageHeader = styled.header`
  height: 6rem;
  background-color: gray;
`
const Main = styled.main`
  height: calc(100vh - 6rem);
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem calc(100vh - 6rem);
`