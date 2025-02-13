import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '../style'
import SideMenu from '../components/SideMenu'

const Layout: React.FC = () => {
  return (
    <Container>
      <SideMenu />
      <Outlet />
    </Container>
  )
}

export default Layout
