import React, { useState } from 'react'
import { FoldersNavigation, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from '../FolderInSideMenu'
import { foldersMock } from '../../mock.tests'

const SideMenu:React.FC = () => {
  const [ actived, setActived ] = useState<number | null>(null)
    
  return(
    <SideContainer>
      <SideMenuTitle>Tracking</SideMenuTitle>
      <FoldersNavigation>
        {foldersMock.map((item, index) => 
          <FolderInSideMenu 
            key={index}
            index={index}
            name={item.name}
            setActived={setActived}
            actived={actived}
          />
        )}
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu