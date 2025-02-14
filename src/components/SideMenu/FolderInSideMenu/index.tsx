import React, { useEffect, useRef, useState } from 'react'
import { FolderContainer, FolderItem, LeftItems, ContainerComponentAndDrop } from './style'
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";
import ItemsOfFolders from './ItemsOfFolders';
import MoreOptionsDropdown from './MoreOptions';

interface PropsType {
  name: string
  index: number
  setActiveds: React.Dispatch<React.SetStateAction<number[]>>
  activeds: number[]
  openDropdownIndex: number | null
  setOpenDropdownIndex: React.Dispatch<React.SetStateAction<number | null>>
}

const FolderInSideMenu: React.FC<PropsType> = ({ activeds, index, name, setActiveds, openDropdownIndex, setOpenDropdownIndex }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleOpenFolder = (itemIndex: number) => {
    if (activeds.includes(itemIndex))
      return setActiveds(prev => prev.filter(item => item !== itemIndex))
    return setActiveds(prev => [...prev, itemIndex])
  }

  const handleDropdownToggle = () => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
        setOpenDropdownIndex(null)
    }

    if (openDropdownIndex !== null)
      document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openDropdownIndex])

  return (
    <ContainerComponentAndDrop>
      <FolderContainer
        onContextMenu={(e) => e.preventDefault()}
        onAuxClick={handleDropdownToggle}
      >
        <FolderItem 
          onClick={() => handleOpenFolder(index)}
          className={activeds.includes(index) ? 'actived' : ''}
        >
          <LeftItems>
            {!activeds.includes(index) ? <RiArrowRightSLine /> : <RiArrowDownSLine />}
            <FaRegFolder />
            <span id='text'>{name}</span>
          </LeftItems>
        </FolderItem>
        {activeds.includes(index) && <ItemsOfFolders mockIndex={index} />}
      </FolderContainer>
      {openDropdownIndex === index && (
        <div ref={dropdownRef}>
          <MoreOptionsDropdown />
        </div>
      )}
    </ContainerComponentAndDrop>
  )
}

export default FolderInSideMenu