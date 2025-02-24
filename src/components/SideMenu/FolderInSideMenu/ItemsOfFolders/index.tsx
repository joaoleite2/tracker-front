import React, { useContext, useEffect, useRef } from 'react'
import { ItemOfList, StyledLink, StyledListOfItems } from './style'
import { useParams } from 'react-router'
import { FolderInterface } from '../..'
import { Input } from '../../../styled-input'
import { SideMenuContext } from '../../../../contexts/SideMenuContext'
import axios from 'axios'

interface PropsType {
  selectedFolderToCreateFile:FolderInterface
}

const ItemsOfFolders:React.FC<PropsType> = (props) => {
  const { selectedFolderToCreateFile: allFolder } = props
  const { id } = useParams()
  const { createFile, setCreateFile, setRefresh } = useContext(SideMenuContext)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[inputRef])
  
  const handleCreateAFileInFolder = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      axios.post(`${import.meta.env.VITE_BASE_URL}/file`,
        {folderId:createFile.folderId, name:createFile.fileName}
      )
      .then(() => {
        setRefresh(prev => (!prev))
        setCreateFile({fileName:'',folderId:0})
      })
      .catch(error => {
        console.error(error)
      })
    }
    if(e.key === 'Escape'){
      setCreateFile({folderId:0, fileName:''})
    }
  }
  
  return(
    <StyledListOfItems>
      {allFolder.files.map((item, index) => 
        <StyledLink to={`/component/${item.id}`} key={index}>
          <ItemOfList className={Number(id) === item.id ? 'actived' : ''}>{item.name}</ItemOfList>
        </StyledLink>
      )}
      {createFile.folderId === allFolder.id ?
        <ItemOfList>
          <Input 
            placeholder='Digite...'
            value={createFile.fileName}
            ref={inputRef}
            onKeyDown={(e) => handleCreateAFileInFolder(e)}
            onChange={(e) => setCreateFile(prev => ({
              ...prev,
              fileName:e.target.value
            }))}
          />
        </ItemOfList>
      : null}
    </StyledListOfItems>
  )
}

export default ItemsOfFolders