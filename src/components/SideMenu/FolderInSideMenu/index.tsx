import React from 'react'
import { FolderContainer, FolderItem } from './style'
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";
import ItemsOfFolders from './ItemsOfFolders';

interface PropsType {
  name:string
  index:number
  setActiveds:React.Dispatch<React.SetStateAction<number[]>>
  activeds:number[]
}

const FolderInSideMenu:React.FC<PropsType> = (props) => {
  const { activeds, index, name, setActiveds } = props

  const handleOpenFolder = (itemIndex:number) => {
    if(activeds.includes(itemIndex)){
      return setActiveds(prev => {
        return prev.filter(item => item !== itemIndex)
      })
    }
    return setActiveds(prev => ([
      ...prev,
      itemIndex
    ]))
  }
  
  return(
    <FolderContainer>
      <FolderItem 
        onClick={() => handleOpenFolder(index)}
        className={activeds.includes(index) ? 'actived' : ''}
      >
        {!activeds.includes(index) ? <RiArrowRightSLine /> : <RiArrowDownSLine />}
        <FaRegFolder />
        <span id='text'>{name}</span>
      </FolderItem>
      {activeds.includes(index) && <ItemsOfFolders mockIndex={index}/>}
    </FolderContainer>
  )
}

export default FolderInSideMenu