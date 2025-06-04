import React, { useContext, useEffect, useRef, useState } from 'react'
import { PiFolderSimplePlus } from 'react-icons/pi'
import { CreateFolder, FoldersDivContainer, FoldersNavigation, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from './FolderInSideMenu'
import axios from 'axios'
import { Input } from '../styled-input'
import { SideMenuContext } from '../../contexts/SideMenuContext'
import { Folder } from '../../types'

const SideMenu: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([])
  const [inputNewFolder, setInputNewFolder] = useState<boolean>(false)
  const [folderName, setFolderName] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { setRefresh, refresh } = useContext(SideMenuContext)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/folders`)
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          setFolders(response.data)
        } else {
          // If no data or invalid format, initialize with empty array
          setFolders([])
        }
      })
      .catch(error => {
        console.error(error)
        setFolders([])
      })
  }, [refresh])

  useEffect(() => {
    if (inputNewFolder && inputRef.current)
      inputRef.current.focus()
  }, [inputNewFolder])

  const handleCreateAFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && folderName.trim()) {
      axios.post(`${import.meta.env.VITE_BASE_URL}/folders`, {
        name: folderName.trim(),
        files: []
      })
        .then(() => {
          setInputNewFolder(false)
          setRefresh(!refresh)
          setFolderName('')
        })
        .catch(error => {
          console.error(error)
        })
    }
    if (e.key === 'Escape') {
      setInputNewFolder(false)
      setFolderName('')
    }
  }

  return (
    <SideContainer>
      <SideMenuTitle>Financial Tracker</SideMenuTitle>
      <FoldersNavigation>
        <CreateFolder>
          <Input
            ref={inputRef}
            className={!inputNewFolder ? 'invisible' : ''}
            placeholder="Folder name..."
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            onKeyDown={handleCreateAFolder}
          />
          <PiFolderSimplePlus
            onClick={() => setInputNewFolder(true)}
            cursor={'pointer'}
            title="Create new folder"
          />
        </CreateFolder>
        <FoldersDivContainer>
          {folders.map((folder) =>
            <FolderInSideMenu
              key={folder.id}
              name={folder.name}
              item={folder}
            />
          )}
        </FoldersDivContainer>
      </FoldersNavigation>
    </SideContainer>
  )
}

export default SideMenu