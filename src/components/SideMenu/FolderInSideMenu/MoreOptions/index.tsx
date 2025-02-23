import React, { useContext } from 'react'
import { MoreOptionsDropDownContainer, OptionItem } from './style'
import { FaFile } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'
import { SideMenuContext } from '../../../../contexts/SideMenuContext'

interface OptionsType {
  label:string
  element:any
  click?:() => void
}


const MoreOptionsDropdown:React.FC = () => {
  const { setCreateFile, setOpenDropdownItemId, openDropdownItemId, setActiveds } = useContext(SideMenuContext)

  const handleCreateAFile = () => {
    setActiveds(prev => ([...prev, openDropdownItemId]))
    setCreateFile({fileName:'', folderId:openDropdownItemId})
    setOpenDropdownItemId(0)
    return
  }

  const options:OptionsType[] = [
    {
      element:<FaFile />,
      label:'Criar',
      click:() => handleCreateAFile()
    },
    {
      element:<MdModeEdit />,
      label:'Renomear'
    },
    {
      element:<IoMdTrash />,
      label:'Excluir'
    },
  ]

  return(
    <MoreOptionsDropDownContainer>
      {options.map((item, index) => 
        <OptionItem 
          key={index}
          onClick={item.click}
        >
          {item.element}
          <span>{item.label}</span>
        </OptionItem>
      )}
    </MoreOptionsDropDownContainer>
  )
}

export default MoreOptionsDropdown