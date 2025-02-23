import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '../style'
import SideMenu from '../components/SideMenu'
import { SideMenuProvider } from '../contexts/SideMenuContext'

const Layout: React.FC = () => {
  return (
    <Container>
      <SideMenuProvider>
        <SideMenu />
      </SideMenuProvider>
      <Outlet />
    </Container>
  )
}

export default Layout
