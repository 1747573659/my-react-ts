import LoginForm from '../../components/LoginForm/LoginForm'
import style from './Login.module.less'
import React from 'react';

const Login = () => (
  <div className={style['login-page-wrap']}>
    <LoginForm/>
  </div>
)

export default  Login