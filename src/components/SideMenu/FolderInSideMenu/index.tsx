import React, { useContext, useEffect, useRef } from 'react'
import { FolderContainer, FolderItem, LeftItems, ContainerComponentAndDrop } from './style'
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri'
import { FaRegFolder } from 'react-icons/fa'
import ItemsOfFolders from './ItemsOfFolders'
import MoreOptionsDropdown from './MoreOptions'
import { FolderInterface } from '..'
import { SideMenuContext } from '../../../contexts/SideMenuContext'

interface PropsType {
  name: string
  item:FolderInterface
}

const FolderInSideMenu: React.FC<PropsType> = ({ name, item }) => {
  const { activeds, setActiveds, setOpenDropdownItemId, openDropdownItemId, createFile } = useContext(SideMenuContext)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleOpenFolder = (itemId: number) => {
    if (activeds.includes(itemId))
      return setActiveds(prev => prev.filter(item => item !== itemId))
    return setActiveds(prev => [...prev, itemId])
  }

  const handleDropdownToggle = () => {
    setOpenDropdownItemId(openDropdownItemId === item.id ? 0 : item.id)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
        setOpenDropdownItemId(0)
    }

    if (openDropdownItemId !== 0)
      document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdownItemId])

  return (
    <ContainerComponentAndDrop>
      <FolderContainer
        onContextMenu={(e) => e.preventDefault()}
        onAuxClick={handleDropdownToggle}
      >
        <FolderItem 
          onClick={() => handleOpenFolder(item.id)}
          className={activeds.includes(item.id) ? 'actived' : ''}
        >
          <LeftItems>
            {!activeds.includes(item.id) ? <RiArrowRightSLine /> : <RiArrowDownSLine />}
            <FaRegFolder />
            <span id='text'>{name}</span>
          </LeftItems>
        </FolderItem>
        {activeds.includes(item.id) && (item.files.length || createFile.folderId === item.id) ? <ItemsOfFolders selectedFolderToCreateFile={item} /> : null}
      </FolderContainer>
      {openDropdownItemId === item.id && (
        <div ref={dropdownRef}>
          <MoreOptionsDropdown />
        </div>
      )}
    </ContainerComponentAndDrop>
  )
}

export default FolderInSideMenu