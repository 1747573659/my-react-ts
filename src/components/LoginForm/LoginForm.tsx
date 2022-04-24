import { Form, Input, Button } from 'antd'
import style from './index.module.less'
import axios from 'axios'
import { useEffect } from 'react'


type loginForm = {
  username: String
  password: String
}

const handleLogin = ({username: loginName, password}: loginForm) => {
  axios.post(`/api/login?loginName=${loginName}&password=${password}`).then(res => {
    console.log(res);
  })
}

const LoginForm = () => {

  const onFinish = (loginForm: loginForm) => {
    handleLogin(loginForm)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={style['login-box']}>
      <Form className={style['login-form']} name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Form.Item label='用户名' name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item labelCol={{ span: 12 }} wrapperCol={{ offset: 8, span: 12 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
