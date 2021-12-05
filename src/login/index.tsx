import React, { FormEvent } from "react"
interface loginParam {
  username: string,
  password: string
}
const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  // 提交表单
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;  
    login({username,password})
  }
  const login = (param:loginParam) => {
    fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(async res => {
      if (res.ok) {
        
      }
    })
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" id={'username'}/>
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id={'password'}/>
    </div>
    <button type="submit">注册</button>
  </form>
}