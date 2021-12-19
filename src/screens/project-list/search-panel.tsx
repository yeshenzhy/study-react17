import React from "react"
import {Select, Input} from 'antd'
export interface User {
  id: string;
  name: string;
  title: string;
  email: string;
  organization: string;
  token: string
}
interface SearchPanelProps {
  param:{
    name: string;
    personId: string;
  }
  users: User[],
  setParam: (param: SearchPanelProps['param']) => void

}
export const SearchPanel = ({param,users, setParam}: SearchPanelProps) => {
  
  return <form>
    <div>
      <Input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <Select value={param.personId} onChange={value => setParam({
        ...param,
        personId: value
      })}>
        <Select.Option value={''}>负责人</Select.Option>
        {
          users.map(users => <option value={users.id} key={users.id}>{users.name}</option>)
        }
      </Select>
    </div>
  </form>
}