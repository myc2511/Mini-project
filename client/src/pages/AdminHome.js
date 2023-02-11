import React from 'react'
import AdminNav from '../components/AdminNav'
import AdminCompTable from '../components/AdminCompTable'
import AdminStudent from '../components/AdminStudent'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function AdminHome() {
  return (
    <div>
    <AdminNav/>

    <Router>
    <Routes>
       
        </Routes>
    </Router>

    </div>
  )
}

export default AdminHome