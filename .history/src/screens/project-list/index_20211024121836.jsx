import React from "react"
import { useEffect, useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"

const apiUrl = process.env.REACT_APP_API_URL
console.log(apiUrl);
export const ProjectListScreen = () => {
  const [param, setParam]  = useState({
    name: '',
    persionId: ''
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.persionId}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [param])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])
  return <div>
    <SearchPanel param={param} users={users} setParam={setParam}></SearchPanel>
    <List list={list} users={users}></List>
  </div>
}