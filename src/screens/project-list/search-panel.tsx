import React from "react"

export interface User {
  id: string;
  name: string;
  title: string;
  email: string;
  organization: string;
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
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(users => <option value={users.id} key={users.id}>{users.name}</option>)
        }
      </select>
    </div>
  </form>
}