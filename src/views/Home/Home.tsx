import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <LeftMenu></LeftMenu>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
      </Routes>
    </div>
  )
}
