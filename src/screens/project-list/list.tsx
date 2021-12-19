import React from "react"
import {User} from './search-panel'
import { Table } from 'antd'
interface Project{
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface listProp {
  list: Project[],
  users: User[]
}
export const List = ({list, users}:listProp) => {
  return <Table pagination={false} dataSource={list} rowKey={columns => columns.id} columns={[{
    title: '名称',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: '负责人',
    render(value, project){
      return <span>
        {users.find(e => e.id === project.personId)?.name || '未知'}
      </span>
    }
  }
  ]}>
  </Table>
}