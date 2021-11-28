import React from "react"
import { useEffect, useState } from "react"
import * as qs from 'qs'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { clearObject, useDebounce, useArray } from "utils"
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
  const person:{name:string}[] = [{
    name: 'tom'
  }]
  const {add,removeIndex,clear, value} = useArray(person)
  return <div>
    <SearchPanel param={param} users={users} setParam={setParam}></SearchPanel>
    <List list={list} users={users}></List>
    <button onClick={() => add({name:'tom2'})}></button>
    {value.map((item:{name: string}, index) => (
      <div key={index}>{item.name}</div>
    ))}
    <div ></div>
  </div>
}