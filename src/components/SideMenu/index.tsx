import React, { useEffect, useRef, useState } from 'react'
import { PiFolderSimplePlus } from 'react-icons/pi'
import { CreateFolder, FoldersNavigation, InputData, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from './FolderInSideMenu'
import { foldersMock } from '../../mock.tests'


const SideMenu:React.FC = () => {
  const [ activeds, setActiveds ] = useState<number[]>([])
  const [ openDropdownIndex, setOpenDropdownIndex ] = useState<number | null>(null)
  const [ inputNewFolder, setNewFolder ] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if(inputNewFolder && inputRef.current)
      inputRef.current.focus()
  }, [inputNewFolder])
    
  return(
    <SideContainer>
      <SideMenuTitle>Tracking</SideMenuTitle>
      <FoldersNavigation>
        <CreateFolder>
          <InputData
            ref={inputRef}
            className={inputNewFolder ? 'visible' : ''}
            placeholder='Ex...'
          />
          <PiFolderSimplePlus onClick={() => setNewFolder(true)} cursor={'pointer'}/>
        </CreateFolder>
        {foldersMock.map((item, index) => 
          <FolderInSideMenu 
            key={index}
            index={index}
            name={item.name}
            setActiveds={setActiveds}
            activeds={activeds}
            openDropdownIndex={openDropdownIndex}
            setOpenDropdownIndex={setOpenDropdownIndex}
          />
        )}
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu