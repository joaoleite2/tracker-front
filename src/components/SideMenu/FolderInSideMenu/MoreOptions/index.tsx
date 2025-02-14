import React from 'react'
import { MoreOptionsDropDownContainer, OptionItem } from './style'
import { FaFile } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'

interface OptionsType {
  label:string
  element:any
}

export const options:OptionsType[] = [
  {
    element:<FaFile />,
    label:'Criar'
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

const MoreOptionsDropdown:React.FC = () => {
  return(
    <MoreOptionsDropDownContainer>
      {options.map((item, index) => 
        <OptionItem key={index}>
          {item.element}
          <span>{item.label}</span>
        </OptionItem>
      )}
    </MoreOptionsDropDownContainer>
  )
}

export default MoreOptionsDropdown