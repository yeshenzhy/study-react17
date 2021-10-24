import React from "react"
export const List = ({list, users}) => {
  console.log(list,users);
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map((item,index) => {
          <tr>
            <td>{item.name}</td>
            {/* <td>{users.find(e => e.id === item.personId)?.name || '未知'}</td> */}
          </tr>
        })
      }
    </tbody>
  </table>
}