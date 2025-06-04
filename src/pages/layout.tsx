import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '../style'
import SideMenu from '../components/SideMenu'
import { SideMenuProvider } from '../contexts/SideMenuContext'
import { FolderProvider } from '../contexts/FolderContext'

const Layout: React.FC = () => {
  return (
    <Container>
      <FolderProvider>
        <SideMenuProvider>
          <SideMenu />
        </SideMenuProvider>
      </FolderProvider>
      <Outlet />
    </Container>
  )
}

export default Layout