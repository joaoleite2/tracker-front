import React, { useRef, useState } from 'react'
import { PiFolderSimplePlus } from 'react-icons/pi'
import { CreateFolder, FoldersDivContainer, FoldersNavigation, SideContainer, SideMenuTitle } from './style'
import FolderInSideMenu from './FolderInSideMenu'
import { Input } from '../styled-input'
import { useFolders } from '../../contexts/FolderContext'

const SideMenu: React.FC = () => {
  const [inputNewFolder, setInputNewFolder] = useState<boolean>(false)
  const [folderName, setFolderName] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { folders, addFolder } = useFolders()

  const handleCreateAFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && folderName.trim()) {
      addFolder(folderName.trim())
      setInputNewFolder(false)
      setFolderName('')
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