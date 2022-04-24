import LoginForm from '../LoginForm/LoginForm'
import style from './index.module.less'
import React from 'react';

const Login = () => (
  <div className={style['login-page-wrap']}>
    <LoginForm/>
  </div>
)

export default  Login