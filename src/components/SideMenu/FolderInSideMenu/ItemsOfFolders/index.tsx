import React, { useContext, useEffect, useRef } from 'react'
import { ItemOfList, StyledLink, StyledListOfItems } from './style'
import { useParams } from 'react-router'
import { FolderInterface } from '../..'
import { Input } from '../../../styled-input'
import { SideMenuContext } from '../../../../contexts/SideMenuContext'

interface PropsType {
  allFolder:FolderInterface
}

const ItemsOfFolders:React.FC<PropsType> = (props) => {
  const { allFolder } = props
  const { id } = useParams()
  const { createFile, setCreateFile } = useContext(SideMenuContext)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[inputRef])
  
  console.log(createFile)
  
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