import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
      </Routes>
    </div>
  )
}
