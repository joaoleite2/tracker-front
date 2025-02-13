import React from 'react'
import { FolderContainer, FolderItem } from './style'
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";
import ItemsOfFolders from '../ItemsOfFolders';

interface PropsType {
  name:string
  index:number
  setActived:React.Dispatch<React.SetStateAction<number | null>>
  actived:number | null
}

const FolderInSideMenu:React.FC<PropsType> = (props) => {
  const { actived, index, name, setActived } = props

  const handleOpenFolder = (itemIndex:number) => {
    if(itemIndex === actived)
      return setActived(null)
    return setActived(itemIndex)
  }
  
  return(
    <FolderContainer>
      <FolderItem 
        onClick={() => handleOpenFolder(index)}
        className={actived === index ? 'actived' : ''}
      >
        {actived !== index ? <RiArrowRightSLine /> : <RiArrowDownSLine />}
        <FaRegFolder />
        <span id='text'>{name}</span>
      </FolderItem>
      {actived === index && <ItemsOfFolders />}
    </FolderContainer>
  )
}

export default FolderInSideMenu