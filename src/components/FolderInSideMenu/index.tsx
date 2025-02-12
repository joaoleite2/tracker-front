import React from 'react'
import { FolderContainer } from './style'
import { RiArrowRightSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";

const FolderInSideMenu:React.FC = () => {
  return(
    <FolderContainer>
      <RiArrowRightSLine />
      <FaRegFolder />
      <span id='text'>Entradas</span>
    </FolderContainer>
  )
}

export default FolderInSideMenu