import React, { useContext } from 'react'
import { MoreOptionsDropDownContainer, OptionItem } from './style'
import { FaFile } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'
import { SideMenuContext } from '../../../../contexts/SideMenuContext'
import axios from 'axios'

interface OptionsType {
  label:string
  element:any
  click?:() => void
}


const MoreOptionsDropdown:React.FC = () => {
  const { setCreateFile, setOpenDropdownItemId, openDropdownItemId, setActiveds, setRefresh } = useContext(SideMenuContext)

  const handleCreateAFile = () => {
    setActiveds(prev => ([...prev, openDropdownItemId]))
    setCreateFile({fileName:'', folderId:openDropdownItemId})
    setOpenDropdownItemId(0)
    return
  }

  const handleDeleteAFolder = () => {
    axios.delete(`${import.meta.env.VITE_BASE_URL}/folders/${openDropdownItemId}`)
      .then(() => {
        setRefresh(prev => !prev)
      })
      .catch(error => {
        console.error(error)
      })
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
      label:'Excluir',
      click:() => handleDeleteAFolder()
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