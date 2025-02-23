import React, { useContext, useEffect, useRef, useState } from 'react'
import { PiFolderSimplePlus } from 'react-icons/pi'
import { CreateFolder, FoldersDivContainer, FoldersNavigation, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from './FolderInSideMenu'
import axios from 'axios'
import { Input } from '../styled-input'
import { SideMenuContext } from '../../contexts/SideMenuContext'

export interface FileInterface {
  id:number
  name:string
}

export interface FolderInterface {
  id:number
  name:string
  files:FileInterface[]
}

const SideMenu:React.FC = () => {
  const [ folders, setFolders ] = useState<FolderInterface[]>([])
  const [ inputNewFolder, setInputNewFolder ] = useState<boolean>(false)
  const [ folderName, setFolderName ] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { setRefresh, refresh } = useContext(SideMenuContext)

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
          <Input
            ref={inputRef}
            className={!inputNewFolder ? 'invisible' : ''}
            placeholder='Ex...'
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            onKeyDown={(e) => handleCreateAFolder(e)}
          />
          <PiFolderSimplePlus onClick={() => setInputNewFolder(true)} cursor={'pointer'}/>
        </CreateFolder>
        <FoldersDivContainer>
          {folders.map((item, index) => 
            <FolderInSideMenu 
              key={index}
              name={item.name}
              item={item}
            />
          )}
        </FoldersDivContainer>
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu