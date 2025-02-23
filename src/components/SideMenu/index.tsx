import React, { useEffect, useRef, useState } from 'react'
import { PiFolderSimplePlus } from 'react-icons/pi'
import { CreateFolder, FoldersContainer, FoldersNavigation, InputData, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from './FolderInSideMenu'
import axios from 'axios'

interface FoldersInterface {
  id:number
  name:string
}

const SideMenu:React.FC = () => {
  const [ folders, setFolders ] = useState<FoldersInterface[]>([])
  const [ activeds, setActiveds ] = useState<number[]>([])
  const [ openDropdownIndex, setOpenDropdownIndex ] = useState<number | null>(null)
  const [ inputNewFolder, setInputNewFolder ] = useState<boolean>(false)
  const [ folderName, setFolderName ] = useState<string>('')
  const [ refresh, setRefresh ] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/folders`)
      .then(response => {
        if(response.data)
          setFolders(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [refresh])
  
  useEffect(() => {
    if(inputNewFolder && inputRef.current)
      inputRef.current.focus()
  }, [inputNewFolder])

  const handleCreateAFolder = (e:React.KeyboardEvent<HTMLInputElement> | any) => {
    if(e.key === 'Enter') {
      axios.post(`${import.meta.env.VITE_BASE_URL}/folders`, 
        { name:folderName }
      )
      .then(() => {
        setInputNewFolder(false)
        setRefresh(!refresh)
        setFolderName('')
        return
      })
      .catch(error => {
        console.error(error)
      })
    }
    if(e.key === 'Escape'){
      setInputNewFolder(false)
    }
  }
    
  return(
    <SideContainer>
      <SideMenuTitle>Tracking</SideMenuTitle>
      <FoldersNavigation>
        <CreateFolder>
          <InputData
            ref={inputRef}
            className={inputNewFolder ? 'visible' : ''}
            placeholder='Ex...'
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            onKeyDown={(e) => handleCreateAFolder(e)}
          />
          <PiFolderSimplePlus onClick={() => setInputNewFolder(true)} cursor={'pointer'}/>
        </CreateFolder>
        <FoldersContainer>
          {folders.map((item, index) => 
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
        </FoldersContainer>
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu