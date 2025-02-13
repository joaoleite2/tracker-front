import React, { useState } from 'react'
import { FoldersNavigation, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from './FolderInSideMenu'
import { foldersMock } from '../../mock.tests'

const SideMenu:React.FC = () => {
  const [ activeds, setActiveds ] = useState<number[]>([])
    
  return(
    <SideContainer>
      <SideMenuTitle>Tracking</SideMenuTitle>
      <FoldersNavigation>
        {foldersMock.map((item, index) => 
          <FolderInSideMenu 
            key={index}
            index={index}
            name={item.name}
            setActiveds={setActiveds}
            activeds={activeds}
          />
        )}
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu