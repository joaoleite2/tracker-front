import React from 'react'
import { FoldersNavigation, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from '../FolderInSideMenu'

const SideMenu:React.FC = () => {
  return(
    <SideContainer>
      <SideMenuTitle>Tracking</SideMenuTitle>
      <FoldersNavigation>
        <FolderInSideMenu />
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu