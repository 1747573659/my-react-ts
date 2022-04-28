import { Form, Input, Button } from 'antd'
import style from './index.module.less'
import axios from 'axios'
import { useNavigate, NavigateFunction } from 'react-router-dom'
import MD5Util from '../../utils/MD5Util'

type loginForm = {
  username: string
  password: string
}

const handleLogin = ({username: loginName, password}: loginForm, navigate: NavigateFunction) => {
  axios.post(`/api/login?loginName=${loginName}&password=${MD5Util.md5(password)}`).then(res => {
    localStorage.setItem('token', res.data.data.token)
    navigate("/user")
    // <Navigate to="/login" state={{ from: location }} replace />
  })
}

const LoginForm = () => {
  const navigate: NavigateFunction = useNavigate()

  const onFinish = (loginForm: loginForm) => {
    handleLogin(loginForm, navigate)
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
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
