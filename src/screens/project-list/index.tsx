import React from "react"
import { useEffect, useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { clearObject, useDebounce, useArray } from "utils"
import { useHttp } from "utils/http"
export const ProjectListScreen = () => {
  const [param, setParam]  = useState({
    name: '',
    personId: ''
  })
  const client = useHttp()
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debounceParam = useDebounce(param, 200)
  useEffect(() => {
    client('projects', {data: clearObject(debounceParam)}).then(setList)
  }, [debounceParam])
  useEffect(() => {
    client('users').then(setUsers)
  }, [])
  return <div>
    <SearchPanel param={param} users={users} setParam={setParam}></SearchPanel>
    <List list={list} users={users}></List>
  </div>
}