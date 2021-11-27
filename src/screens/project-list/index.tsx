import React from "react"
import { useEffect, useState } from "react"
import * as qs from 'qs'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { clearObject, useDebounce } from "utils"
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [param, setParam]  = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debounceParam = useDebounce(param, 200)
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(clearObject(debounceParam))}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceParam])
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